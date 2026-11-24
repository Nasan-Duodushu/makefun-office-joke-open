// Make the AI Judge Laugh: the Office Joke Open — one line, at most 200 characters.
// The joke is office-true: the perks are real, the work never happens,
// and the meeting about the meeting is already booked.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "The office has a ping-pong table, a nap pod, and a calendar full of meetings about why nobody has time to work.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
