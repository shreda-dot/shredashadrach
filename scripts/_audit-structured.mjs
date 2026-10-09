import http from "node:http";

function get(path) {
  return new Promise((resolve, reject) => {
    const req = http.get("http://localhost:3000" + path, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          body: Buffer.concat(chunks).toString("utf8"),
        });
      });
    });
    req.setTimeout(8000, () => req.destroy(new Error("timeout")));
    req.on("error", (e) => reject(e));
  });
}

function report(title, body) {
  console.log(`\n=== ${title} ===`);
  const canon = body.match(/<link[^>]*?rel="canonical"[^>]*?>/i);
  if (canon) console.log("CANONICAL:", canon[0]);
  const robot = body.match(/<meta[^>]*?name="robots"[^>]*?>/i);
  if (robot) console.log("ROBOTS:", robot[0]);
  const ldRe =
    /<script[^>]*?type="application\/ld\+json"[^>]*?>([\s\S]*?)<\/script>/gi;
  const ldMatches = [...body.matchAll(ldRe)];
  if (ldMatches.length) {
    console.log(`JSON-LD scripts found: ${ldMatches.length}`);
    for (let i = 0; i < ldMatches.length; i += 1) {
      const raw = ldMatches[i][1] ?? "";
      try {
        const parsed = JSON.parse(raw);
        const type = Array.isArray(parsed)
          ? parsed.map((p) => p?.["@type"]).join(",")
          : parsed?.["@type"];
        console.log(`  #${i + 1}  @type=${type}`);
        if (parsed?.["@type"] === "Person") {
          const count = Array.isArray(parsed.sameAs) ? parsed.sameAs.length : 0;
          console.log(`     name=${parsed.name} sameAs count=${count}`);
          if (Array.isArray(parsed.sameAs)) {
            for (const s of parsed.sameAs) console.log(`     - ${s}`);
          }
        }
        if (parsed?.["@type"] === "BreadcrumbList") {
          const items = parsed.itemListElement ?? [];
          for (const it of items) {
            console.log(`     ${it.position}. ${it.name} -> ${it.item}`);
          }
        }
        if (parsed?.["@type"] === "WebSite") {
          console.log(
            `     name=${parsed.name} url=${parsed.url} search=${Boolean(
              parsed.potentialAction,
            )}`,
          );
        }
        if (parsed?.["@type"] === "Article") {
          console.log(
            `     headline=${parsed.headline} author=${parsed.author?.name} section=${parsed.articleSection}`,
          );
        }
      } catch {
        console.log("  # (unparseable json)");
      }
    }
  } else {
    console.log("JSON-LD scripts found: 0");
  }
}

async function main() {
  const paths = [
    "/",
    "/about",
    "/projects",
    "/projects/schooldra",
    "/resume",
    "/contact",
  ];
  const responses = await Promise.all(paths.map((p) => get(p)));
  for (let i = 0; i < paths.length; i += 1) {
    report(`${paths[i]}  (HTTP ${responses[i].status})`, responses[i].body);
  }
}

main().catch((e) => {
  console.error("FAIL", e.message);
  process.exit(1);
});
