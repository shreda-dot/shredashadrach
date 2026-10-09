import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const sourceDirectories = ["src", "app"].map((directory) =>
  join(root, directory),
);
const htmlDirectories = [
  join(root, ".next", "server", "app"),
  join(root, ".next", "server", "pages"),
  join(root, "out"),
];
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".jsx",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
]);
const findings = [];
const htmlFiles = [];

for (const directory of sourceDirectories) {
  for (const file of await findFiles(directory, (path) =>
    textExtensions.has(extname(path).toLowerCase()),
  )) {
    await scanFile(file, await readFile(file, "utf8"), false);
  }
}

for (const directory of htmlDirectories) {
  htmlFiles.push(...(await findFiles(directory, (path) => path.endsWith(".html"))));
}

for (const file of htmlFiles) {
  await scanFile(file, await readFile(file, "utf8"), true);
}

if (htmlFiles.length === 0) {
  console.warn(
    [
      "WARNING: No prerendered HTML files were found; the HTML scan was skipped.",
      "Directories searched:",
      ...htmlDirectories.map((directory) => `- ${relative(root, directory)}`),
      "The source scan still ran.",
    ].join("\n"),
  );
} else {
  console.log(`Scanned ${htmlFiles.length} generated HTML files.`);
}

if (findings.length > 0) {
  console.error("Production-blocking placeholders or invalid links found:");
  for (const finding of findings) {
    console.error(
      `- ${relative(root, finding.file)}:${finding.line}: ${finding.kind}: ${finding.text.trim()}`,
    );
  }
  process.exitCode = 1;
} else {
  console.log("No placeholder text or invalid links found.");
}

async function scanFile(file, content, isHtml) {
  const visibleContent = isHtml
    ? content
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (match) =>
          match.replace(/[^\n]/g, " "),
        )
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, (match) =>
          match.replace(/[^\n]/g, " "),
        )
        .replace(/<[^>]*>/g, (match) => match.replace(/[^\n]/g, " "))
    : content;
  const lines = content.split(/\r?\n/);
  const visibleLines = visibleContent.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const visibleLine = visibleLines[index] ?? line;
    const checks = [
      { kind: "[TODO] placeholder", pattern: /\[TODO\b/gi, visibleOnly: true },
      {
        kind: "[CONFIRM] placeholder",
        pattern: /\[CONFIRM\b/gi,
        visibleOnly: true,
      },
      {
        kind: 'href="#"',
        pattern: /\bhref\s*=\s*(?:"#"|'#')/gi,
      },
      {
        kind: "empty href",
        pattern:
          /\bhref\s*=\s*(?:"\s*"|'\s*')|\bhref\s*=\s*\{\s*(?:"\s*"|'\s*')\s*\}/gi,
      },
      {
        kind: "empty WhatsApp number",
        pattern:
          /\b(?:https?:\/\/)?wa\.me\/(?:[?#][^"'`\s<>]*)?(?=["'`\s)]|$)/gi,
      },
      {
        kind: "TODO domain",
        pattern: /\b(?:https?:\/\/)?(?:www\.)?TODO-[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
      },
    ];

    for (const { kind, pattern, visibleOnly } of checks) {
      pattern.lastIndex = 0;
      const checkedLine = visibleOnly ? visibleLine : line;
      for (const match of checkedLine.matchAll(pattern)) {
        findings.push({
          file,
          line: index + 1,
          kind,
          text: match[0],
        });
      }
    }
  }
}

async function findFiles(directory, predicate) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findFiles(path, predicate)));
    } else if (entry.isFile() && predicate(path)) {
      files.push(path);
    }
  }
  return files;
}
