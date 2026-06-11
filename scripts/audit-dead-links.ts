/**
 * Dead-link audit for ChildBloom.
 *
 * Scans every .tsx file under src/routes for:
 *   - href="#"   (anchor placeholders)
 *   - to="#"     (TanStack Link placeholders)
 *   - empty href / to values
 *
 * Exits with code 1 if any are found, so it can run in CI.
 *
 * Usage:  bun run scripts/audit-dead-links.ts
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(process.cwd(), "src", "routes");
const PATTERNS: Array<{ name: string; regex: RegExp }> = [
  { name: 'href="#"', regex: /href=["']#["']/g },
  { name: 'to="#"', regex: /to=["']#["']/g },
  { name: 'empty href', regex: /href=["']["']/g },
  { name: 'empty to', regex: /\sto=["']["']/g },
];

interface Finding {
  file: string;
  line: number;
  pattern: string;
  snippet: string;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) out.push(full);
  }
  return out;
}

function audit(): Finding[] {
  const findings: Finding[] = [];
  for (const file of walk(ROOT)) {
    const text = readFileSync(file, "utf8");
    const lines = text.split("\n");
    for (const { name, regex } of PATTERNS) {
      lines.forEach((line, i) => {
        if (regex.test(line)) {
          findings.push({
            file: relative(process.cwd(), file),
            line: i + 1,
            pattern: name,
            snippet: line.trim().slice(0, 120),
          });
        }
        regex.lastIndex = 0;
      });
    }
  }
  return findings;
}

const findings = audit();
if (findings.length === 0) {
  console.log("✓ No dead links found.");
  process.exit(0);
}

console.log(`Found ${findings.length} dead link(s):\n`);
for (const f of findings) {
  console.log(`  ${f.file}:${f.line}  [${f.pattern}]  ${f.snippet}`);
}
process.exit(1);