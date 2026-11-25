// Monday Morning Punchlines — deterministic one-line entry.
// The text is fixed in this file: no input, no randomness, no network,
// so every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My Monday alarm went off. My ambition hit snooze. My coffee went on strike.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
