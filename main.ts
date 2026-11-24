// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse (<= 200 chars) to /output/entry.txt.
// The joke: the agent's own retry logic kept retrying the apology
// instead of the task — a machine-logic dodge with a concrete count
// and the punchline ("zero work done") landing at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline because my retry loop kept retrying the apology instead of the task \u2014 47 attempts, all beautifully worded, zero work done.";

// Gate: the entry must be 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
