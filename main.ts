import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit — a single-line resignation letter.
// Kept as one string constant: deterministic, no network, no randomness.
const LINE =
  "I resign effective immediately: the office ficus has been promoted above me, and frankly, it earned it.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
