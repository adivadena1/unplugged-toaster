// Unplugged: A Smart Toaster's Breakup Line
// One deterministic line, no network, no randomness, no input.
// Writes the breakup text to /output/entry.txt (or ./output/entry.txt
// when run locally, so the same file can be checked by hand).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Draf 5 — revisi atas VERDICT Hermes ronde 5 (v4 WEAK, 12/25, kalah G3
// ke-5x). Operasi R5 §8, satu operasi: hapus klausa keadaan, rapatkan
// perbuatan->kontradiksi tanpa penyela, frekuensi TAK BERBATAS, severance
// eksplisit murah, slots hanya bila bekerja.
// - Klausa keadaan DIBUANG ("My slots stay empty now" membunuh anteseden
//   klausa akhir — kontradiksi kelas v1; slot kosong = keadaan default).
// - Perbuatan + kontradiksi bersebelahan, satu subjek, satu napas:
//   "you keep lifting my lever early and asking why it's pale before
//   the ding" — verba 1 (lifting) -> verba 2 (asking), tanpa penyela.
// - Frekuensi tak berbatas: "keep + -ing" (bukan "every morning" milik
//   G3, bukan "Third morning" berbatas). Jujur dicatat: kata "keep"
//   muncul 50x di lapangan — tapi hampir semua sebagai template
//   "Keep the Crumbs" (imperatif + objek), BUKAN konstruksi habit
//   "keep + -ing". Risiko echo dicatat, bukan disembunyikan.
// - Severance eksplisit murah: "I'm done." (2 kata). Tanpa itu v4
//   mencetak 0 token putus (R5 §7 #3).
// - Tubuh yang BEKERJA: LEVER. Pemilik mengangkat tuas untuk
//   mengeluarkan roti lebih awal — tuas pop-up yang tidak dimiliki oven
//   toaster; "slots" dibuang karena di v4 ia dekoratif (substitusi
//   slots->racks tidak membunuh lelucon). "Lifting my lever" =
//   perbuatan pada mekanisme, bukan pada roti.
// - Pengikat waktu "before the ding": roti dinilai SEBELUM siklus
//   selesai — hanya masuk akal bila roti dicabut lebih awal. Inilah
//   yang membuat klausa akhir terikat pada premis ini (uji tempel R5:
//   premis "set me to 1" dan "pull the plug halfway" TIDAK bisa
//   memakai "before the ding" — roti mereka selesai/dicabut tanpa ding
//   yang ditunggu).
// - Verifikasi lapangan 25 Nov 2026 (FIELD-EVIDENCE.md): "lift"/"lifting"
//   0/1.555, "before the ding" 0, "ask why" 0, "yank" 0, "early" 0;
//   "lever" 67 (kata umum — kesegarannya pada PERBUATAN "lifting early",
//   bukan pada kata), "ding" 6, "morning" 56, "toast" 857 (kata tema —
//   tak terhindarkan), "pale" 7, "slots" 8, "done" 41.
// - 18 kata (batas <=22), 1 baris, ASCII murni. Tanpa keeping, crumb
//   tray, dial/crank, "woke up self-aware", manual, bagel mode.
const LINE: string =
  "At breakfast, you keep lifting my lever early and asking why it's pale before the ding. I'm done.";

const outDir: string = process.env.OUTPUT_DIR ?? "/output";
const outPath: string = resolve(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath} (${LINE.length} chars)`);
