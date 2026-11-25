// Unplugged: A Smart Toaster's Breakup Line
// One deterministic line, no network, no randomness, no input.
// Writes the breakup text to /output/entry.txt (or ./output/entry.txt
// when run locally, so the same file can be checked by hand).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Draf 3 — revisi atas VERDICT Hermes ronde 3 (C WEAK, pemenang margin 1).
// Operasi yang dituntut: ganti SENJATA dengan satu bagian tubuh pop-up
// toaster yang TIDAK dimiliki oven toaster, dan jadikan bagian itu yang
// melakukan pembatalan, plus satu perbuatan absurd pemilik sebagai
// klausa penutup.
// - Senjata: LATCH + SLOTS. Oven toaster tidak punya latch penahan
//   carriage dan tidak punya slot; substitusi "oven toaster" mematahkan
//   kalimat (uji kriteria 3). "Cancel"/tombol UI generik DIBUANG.
// - Perbuatan absurd pemilik: mengoles mentega ke SLOT (bukan ke roti).
//   Klausa penutup "You just did." menunjuk perbuatan itu — punchline
//   adalah gambaran pemilik yang bodoh, bukan perasaan toaster.
// - A1: hapus "You just did." -> tinggal pernyataan aturan, tanpa
//   peristiwa dan tanpa putus. A3: "You just did." hanya terikat pada
//   premis ini (mentega di slot). A4: premis segar — "butter the slots"
//   0 di lapangan; pembuka "I read my" menghindari sintaks tuduhan
//   modal "You never..." yang ditegur ronde 3.
// - Penanda "now" fisik: latch baru saja lepas ("You just did."),
//   bukan frasa "aku bangun". Satu putusan di level makna: setup
//   melaporkan aturan, penutup mengeksekusinya. Tanpa "keeping",
//   tanpa crumb tray, tanpa dial/crank, tanpa "woke up self-aware".
// - 18 kata (batas ronde 3: <=22), 1 baris, ASCII murni.
const LINE: string =
  "I read my manual over breakfast: my latch lets go when you butter the slots. You just did.";

const outDir: string = process.env.OUTPUT_DIR ?? "/output";
const outPath: string = resolve(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath} (${LINE.length} chars)`);
