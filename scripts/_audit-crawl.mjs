import http from "node:http";

function get(path) {
  return new Promise((resolve, reject) => {
    const req = http.get("http://localhost:3000" + path, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks).toString("utf8"),
        });
      });
    });
    req.setTimeout(8000, () => req.destroy(new Error("timeout")));
    req.on("error", (e) => reject(e));
  });
}

function pickHead(body) {
  const head = body.match(/<head>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const picks = [];
  const re = /<(meta|link|script)([^>]*?)(?:>([\s\S]*?)<\/\1>|\/?>)/gi;
  let m;
  while ((m = re.exec(head))) {
    const full = m[0];
    const inner = m[3] ?? "";
    const low = full.toLowerCase();
    if (low.includes("noindex") || low.includes("nofollow")) {
      picks.push("WARN ROBOTS META: " + full);
    }
    if (low.includes('rel="canonical"')) picks.push(full);
    if (low.includes('property="og:') || low.includes('name="og:')) {
      picks.push(full);
    }
    if (low.includes('name="twitter:')) picks.push(full);
    if (low.includes("application/ld+json")) {
      picks.push("---JSON-LD---\n" + full + inner + "\n---/JSON-LD---");
    }
    if (
      low.includes('name="description"') &&
      !low.includes("og:") &&
      !low.includes("twitter:")
    ) {
      picks.push(full);
    }
    if (low.includes("<link") && low.includes("sitemap.xml")) picks.push(full);
  }
  return picks;
}

async function main() {
  const [robots, sitemap, homeHTML, aboutHTML] = await Promise.all([
    get("/robots.txt"),
    get("/sitemap.xml"),
    get("/"),
    get("/about"),
  ]);

  console.log("--- /robots.txt ---");
  console.log("status", robots.status);
  console.log("content-type", robots.headers["content-type"]);
  console.log(robots.body);

  console.log("\n--- /sitemap.xml ---");
  console.log("status", sitemap.status);
  console.log("content-type", sitemap.headers["content-type"]);
  console.log(sitemap.body);

  console.log("\n--- home / <head> picks ---");
  const hp = pickHead(homeHTML.body);
  console.log(hp.length ? hp.join("\n") : "(no meta/link/ld picks)");

  console.log("\n--- /about <head> picks ---");
  const ap = pickHead(aboutHTML.body);
  console.log(ap.length ? ap.join("\n") : "(no meta/link/ld picks)");
}

main().catch((e) => {
  console.error("FAIL", e.message);
  process.exit(1);
});
