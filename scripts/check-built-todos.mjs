import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const skipTodoCheck = process.env.TODO_CHECK_BYPASS === "1";

if (skipTodoCheck) {
  console.warn(
    "Skipping the visible TODO check because TODO_CHECK_BYPASS=1. Link checks still run; do not set this in production.",
  );
}

const pagesDirectory = join(process.cwd(), ".next", "server", "app");
const htmlFiles = await findHtmlFiles(pagesDirectory);

if (htmlFiles.length === 0) {
  throw new Error(
    "The build did not contain prerendered HTML pages to check for visible TODO text.",
  );
}

const findings = [];
const invalidLinks = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const visibleText = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ");

  if (!skipTodoCheck && visibleText.includes("[TODO")) {
    findings.push(file);
  }

  if (/\bhref\s*=\s*(["'])#\1/i.test(html)) {
    invalidLinks.push(`${file}: href="#"`);
  }

  if (/\bhref\s*=\s*(["'])(?:https?:\/\/)?wa\.me\/(?:\?[^"']*)?\1/i.test(html)) {
    invalidLinks.push(`${file}: empty wa.me number`);
  }
}

if (!skipTodoCheck && findings.length > 0) {
  console.error(
    "Visible [TODO text was found in these built pages. Replace all visible placeholders before production:",
  );
  for (const file of findings) {
    console.error(`- ${file}`);
  }
  process.exitCode = 1;
} else if (!skipTodoCheck) {
  console.log(
    `Checked ${htmlFiles.length} rendered HTML pages; no visible TODOs or invalid links found.`,
  );
}

if (invalidLinks.length > 0) {
  console.error("Invalid links were found in the built pages:");
  for (const finding of invalidLinks) {
    console.error(`- ${finding}`);
  }
  process.exitCode = 1;
}

async function findHtmlFiles(directory) {
  const results = [];

  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return results;
    }
    throw error;
  }

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findHtmlFiles(path)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(path);
    }
  }

  return results;
}
