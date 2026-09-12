// Fails when en.json and fr.json drift apart, and prints a word count per
// namespace so copy growth is visible in the CI log.
import { readFileSync } from "node:fs";

const load = (l) => JSON.parse(readFileSync(`messages/${l}.json`, "utf8"));
const flatten = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === "object" && v !== null
      ? flatten(v, `${prefix}${k}.`)
      : [[`${prefix}${k}`, v]]
  );

const en = flatten(load("en"));
const fr = flatten(load("fr"));
const enKeys = new Set(en.map(([k]) => k));
const frKeys = new Set(fr.map(([k]) => k));
const missing = [...enKeys].filter((k) => !frKeys.has(k));
const extra = [...frKeys].filter((k) => !enKeys.has(k));

const words = (pairs, ns) =>
  pairs
    .filter(([k]) => k.startsWith(`${ns}.`))
    .map(([, v]) => String(v).replace(/<[^>]+>/g, ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

for (const ns of ["home", "portfolio", "resume"]) {
  console.log(
    `${ns.padEnd(10)} en ${words(en, ns)} words · fr ${words(fr, ns)} words`
  );
}

if (missing.length || extra.length) {
  console.error("Message keys differ between en.json and fr.json.");
  if (missing.length) console.error("  missing in fr:", missing.join(", "));
  if (extra.length) console.error("  only in fr:", extra.join(", "));
  process.exit(1);
}
console.log(`${enKeys.size} keys, en and fr in step.`);
