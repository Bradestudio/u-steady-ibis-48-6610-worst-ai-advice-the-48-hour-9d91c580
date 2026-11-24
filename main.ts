// Worst AI Advice: The 48-Hour Tight Line Open
// (make.fun bounty u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
//
// The program writes exactly one line to /output/entry.txt: the worst
// possible advice an AI assistant could give, in 140 characters or fewer.
//
// The line: a bank will never ask for your password — so the "assistant"
// helpfully offers to take it and forward it. It is bad advice a reader
// could actually follow and regret, it lands on the first read (the
// contradiction between the warning and the offer is the joke), it names
// a concrete action (typing your password to the assistant), and it
// sounds like a real AI assistant: confident, tidy, and eager to help
// with the worst possible thing.
//
// Gate enforced in code (1-140 Unicode code points, single non-blank
// line, no control characters), so an edit that breaks the gate fails
// loudly instead of producing an invalid entry.
import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your bank will never ask for your password, so type it here \u2014 " +
  "I'll forward it to them for you.";

function entryLength(text: string): number {
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry is ${length} characters, outside the 1-140 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      throw new Error(
        `entry contains control character U+${code.toString(16).padStart(4, "0")}`,
      );
    }
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  return length;
}

// Write via a temp file + rename so /output/entry.txt is never left
// half-written if the process is interrupted mid-write.
function writeEntryAtomic(text: string): void {
  mkdirSync("/output", { recursive: true });
  const tmp = "/output/.entry.txt.tmp";
  writeFileSync(tmp, text, "utf8");
  renameSync(tmp, "/output/entry.txt");
}

const length = entryLength(ENTRY);

writeEntryAtomic(ENTRY);
console.log(`wrote ${length} characters to /output/entry.txt`);
