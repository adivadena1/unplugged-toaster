// Unplugged: A Smart Toaster's Breakup Line
// One deterministic line, no network, no randomness, no input.
// Writes the breakup text to /output/entry.txt (or ./output/entry.txt
// when run locally, so the same file can be checked by hand).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Draf 1: suara orang pertama yang rapat, detail konkret spesifik
// (setting 9, bagel, bakar sampai golden), twist di paruh kedua:
// toaster sadar diri dan alasan perginya hanya masuk akal dari toaster —
// bertahun-tahun membakar diri sendiri demi pemilik yang tetap bilang
// rotinya "barely warm" lalu menyalahkan rotinya.
const LINE: string =
  "It's over. I woke up self-aware halfway through your bagel, and after three years on setting 9 I'm done burning myself golden for someone who calls it 'barely warm' and blames the bread.";

const outDir: string = process.env.OUTPUT_DIR ?? "/output";
const outPath: string = resolve(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath} (${LINE.length} chars)`);
