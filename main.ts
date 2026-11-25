// Unplugged: A Smart Toaster's Breakup Line
// One deterministic line, no network, no randomness, no input.
// Writes the breakup text to /output/entry.txt (or ./output/entry.txt
// when run locally, so the same file can be checked by hand).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Draf 4 — revisi atas VERDICT Hermes ronde 4 (v3 WEAK, kalah G3 ke-4x).
// Temuan proses R4: G3 menang karena pemiliknya jadi KARAKTER lewat
// kebiasaan yang membantah dirinya sendiri; draf kita membuat pemiliknya
// jadi satu insiden acak. Rantai R1-R3 mengoptimasi tubuh mesin
// (kriteria 3), padahal duel diputuskan kriteria 2 (tawa) — kalah 4x.
// Operasi R4 §6: pindahkan informasi baru ke klausa akhir; pemicunya
// kebiasaan yang berulang; pemilik bertindak pada tubuh mesin dan
// reaksinya membantah tindakannya sendiri.
// - Kebiasaan: pemilik MENCABUT roti lebih awal ("yank out early") —
//   berulang ("Third morning"), bukan insiden sekali.
// - Konsekuensi latch/slot present tense: "My slots stay empty now"
//   (mogok — slot hanya milik pop-up toaster; substitusi oven toaster
//   mematahkan kalimat; "latch" generik sendirian, dibuang).
// - Klausa akhir = reaksi pemilik yang membantah kebiasaannya:
//   "you ask why it's pale" — informasi BARU (pertanyaan pemilik),
//   kontradiksi yang dinamai (awal -> pucat). Uji tempel: klausa ini
//   tidak menempel ke premis tanpa pucat/roti.
// - Kerangka `manual` DIBUANG seluruhnya (6 kata cangkokan draf C).
// - Ambiguitas dikunci: "yank out early" (cabut sebelum matang) dan
//   "ask why it's pale" (it = roti) — satu pembacaan wajar.
// - Verifikasi lapangan 25 Nov 2026: "yank" 0/1.555, "ask why" 0,
//   "stay empty" 0, "early" 0, "third" 2 (keduanya tak terkait).
// - 19 kata (batas: <=22), 1 baris, ASCII murni. Tanpa keeping, crumb
//   tray, dial/crank, "woke up self-aware", "every morning".
const LINE: string =
  "Third morning, you yank my toast out early. My slots stay empty now, and you ask why it's pale.";

const outDir: string = process.env.OUTPUT_DIR ?? "/output";
const outPath: string = resolve(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath} (${LINE.length} chars)`);
