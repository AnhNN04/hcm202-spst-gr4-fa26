// LỒNG TIẾNG THEO CHƯƠNG — phát đúng ĐOẠN trong 2 file voice (không cần cắt file).
// Khi cuộn tới một chương, hệ thống đặt currentTime = start, phát tới end rồi dừng.
//
//  Part 1 = /audio/voice/part-1.m4a  (~86.7s)  — mở đầu → 1920
//  Part 2 = /audio/voice/part-2.m4a  (~153.5s) — 30 năm → kết
//
//  ⚠️ CÁC MỐC DƯỚI ĐÂY LÀ ƯỚC LƯỢNG. Bạn nghe 2 file rồi chỉnh `start`/`end`
//     (đơn vị: giây) cho khớp giọng đọc. Chỉ sửa số, không cần đụng code.
export interface NarrationCue {
  id: string; // id của <section> chương
  part: 1 | 2;
  start: number; // giây
  end: number; // giây
  // dải cuộn con (0..1) của section mà đoạn này quét qua. Mặc định cả section [0,1].
  // Với 1945: thuyết minh chỉ quét băng đầu để đọc XONG rồi mới tới bản
  // ghi Tuyên ngôn (xem DECL_SCROLL trong AudioController).
  scroll?: [number, number];
}

export const NARRATION_FILES: Record<1 | 2, string> = {
  1: '/audio/voice/part-1.m4a',
  2: '/audio/voice/part-2.m4a',
};

export const NARRATION: NarrationCue[] = [
  // ── Part 1 (voice001, voice002, voice003) ──────────────────────────
  { id: 'hero', part: 1, start: 0, end: 15.02 },                  // file 001: 0 -> 15s
  { id: 'chapter-1890', part: 1, start: 15.02, end: 33.73 },      // file 001: 15s -> hết
  { id: 'chapter-1911', part: 1, start: 33.73, end: 55.25 },      // file 002: toàn bộ (21.5s)
  { id: 'chapter-1919', part: 1, start: 55.25, end: 72.76 },      // file 003: 0 -> 17.5s
  { id: 'chapter-1920', part: 1, start: 72.76, end: 93.75 },      // file 003: 17.5s -> 38.5s

  // ── Part 2 (voice003, voice004, voice005, voice006) ─────────────────
  { id: 'chapter-nguyen-ai-quoc', part: 2, start: 0, end: 21.33 },// file 003: 38.5s -> hết
  { id: 'chapter-1930', part: 2, start: 21.33, end: 38.33 },      // file 004: 0 -> 17s
  { id: 'chapter-1941', part: 2, start: 38.33, end: 58.34 },      // file 004: 17s -> 37s
  // thuyết minh 1945 chỉ quét băng đầu (chữ ngày tháng); đọc xong mới tới bản
  // ghi Tuyên ngôn ở băng giữa (DECL_SCROLL), rồi ĐỘC LẬP / TỰ DO
  { id: 'chapter-1945', part: 2, start: 58.34, end: 79.33, scroll: [0, 0.3] }, // file 004: 38s -> 59s
  { id: 'chapter-1954', part: 2, start: 79.33, end: 109.99 },     // file 005: toàn bộ (30.66s)
  { id: 'map', part: 2, start: 109.99, end: 124.01 },             // file 006: 0 -> 14s
  { id: 'final', part: 2, start: 124.01, end: 135.00 },            // file 006: 14s -> 25s
  { id: 'gallery', part: 2, start: 135.00, end: 147.48 },          // file 006: 25s -> hết
];

