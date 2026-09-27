# 🇻🇳 HÀNH TRÌNH THEO CHÂN BÁC
### Triển lãm số tương tác đa phương tiện về cuộc đời & sự nghiệp Chủ tịch Hồ Chí Minh

> *"Một hành trình – Một lý tưởng – Một cuộc đời vì dân tộc"*

Dự án học phần **HCM202 (Tư tưởng Hồ Chí Minh)** — FPT University | **SPST — Nhóm 4 (FA26)**

[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/Animation-GSAP_3_+_ScrollTrigger-green?style=flat&logo=greensock)](https://gsap.com/)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind_CSS_3-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

---

## Giới thiệu dự án

**Hành trình theo chân Bác** là một trải nghiệm **triển lãm số điện ảnh tương tác (Interactive Cinematic Scrollytelling)**. Người xem cuộn trang để bước vào từng giai đoạn lịch sử hào hùng như đang theo dõi một cuốn phim tài liệu nghệ thuật sống động được điều khiển mượt mà theo từng cử chỉ chuột hoặc cảm ứng.

Trang web kết hợp hài hòa giữa **công nghệ web hiện đại** (GSAP, Lenis, Web Audio API, Canvas) và **nghệ thuật thị giác mang đậm bản sắc Việt Nam** (sắc đỏ son, vàng sao, giấy dó/sepia hoài niệm, sương khói Pác Bó, hoa sen và hạt phim cổ điển).

---

## Tính năng nổi bật

- **Cinematic Scrollytelling:** Hiệu ứng cuộn đồng bộ dòng thời gian với chiều sâu 2.5D parallax, timeline scrubbed chân thực và chữ biến ảo mượt mà.
- **Dòng thời gian lịch sử chi tiết (1890 – 1954+):**
  - **1890:** *Thời niên thiếu tại Làng Sen (Kim Liên, Nghệ An)*.
  - **1911:** *Rời Bến Nhà Rồng ra đi tìm đường cứu nước*.
  - **1919 – 1920:** *Bản Yêu sách nhân dân An Nam & Bước ngoặt tại Đại hội Tours*.
  - **30 Năm bôn ba & Thời kỳ Nguyễn Ái Quốc:** *Hành trình khảo nghiệm chân lý qua 3 đại dương, 4 châu lục*.
  - **1930:** *Hợp nhất và thành lập Đảng Cộng sản Việt Nam*.
  - **1941:** *Trở về Pác Bó lãnh đạo cách mạng Việt Nam*.
  - **1945:** *Bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa*.
  - **1954 & Về sau:** *Chiến thắng Điện Biên Phủ lừng lẫy và biểu tượng bất diệt*.
- **Hệ thống Âm thanh Đa tầng (Audio Engine):**
  - Nhạc nền Ambient sâu lắng, truyền cảm hứng.
  - Thuyết minh / Voiceover theo từng chương.
  - Hiệu ứng âm thanh bối cảnh (tiếng sóng biển, tiếng rừng Pác Bó, tiếng reo hò Ba Đình 1945).
- **Auto-Scroll Mode:** Tính năng tự động cuộn trang thông minh giúp người xem trải nghiệm như một bộ phim tài liệu mà không cần thao tác liên tục.
- **Bản đồ Tương tác & Chiếu sáng Lãnh thổ:** Bản đồ Việt Nam hiển thị trực quan dải đất hình chữ S liền một dải từ Bắc chí Nam cùng hai quần đảo Hoàng Sa - Trường Sa.
- **Thư viện Tư liệu & Phòng Truyền thông (Gallery & Media Archive):** Nơi lưu trữ, phục dựng các bức ảnh lịch sử quý giá, bản ghi âm và trích đoạn video thời khắc lịch sử 1945.

---

## Công nghệ sử dụng

| Lĩnh vực | Công nghệ | Mục đích / Ứng dụng |
|---|---|---|
| **Framework** | Next.js (App Router) | SSR, tối ưu hóa asset, font loading, routing |
| **Giao diện** | React 19 + TypeScript | Xây dựng component giao diện với độ an toàn kiểu cao |
| **Hiệu ứng Cuộn** | GSAP 3 + ScrollTrigger | Scrubbed timeline animations, hiệu ứng chuyển động đa lớp |
| **Cuộn Mượt** | Lenis | Smooth scrolling mượt mà 60/120fps, đồng bộ GSAP ticker |
| **Tạo kiểu (CSS)** | Tailwind CSS + Custom CSS | Hệ màu nhận diện Việt Nam, typography chuẩn điện ảnh, film grain |
| **Âm thanh & Đồ họa** | Web Audio API + Canvas | Xử lý đa kênh âm thanh, âm thanh không gian (SFX/Voice), visual layers |

---

## Cấu trúc thư mục

```
.
├── app/
│   ├── layout.tsx              # Cấu hình Fonts, SEO Metadata, SmoothScroll & FilmGrain
│   ├── page.tsx                # Khung kịch bản chính & tích hợp toàn bộ các chương
│   ├── globals.css             # Thiết kế hệ màu sắc VN, hiệu ứng hạt phim, typography
│   └── icon.svg                # Favicon biểu tượng ngôi sao vàng
├── components/
│   ├── Navbar.tsx              # Thanh điều hướng trong suốt, thích ứng mờ dần
│   ├── TimelineIndicator.tsx   # Cột mốc thời gian vàng định vị vị trí người xem
│   ├── AutoScrollButton.tsx    # Nút bật/tắt chế độ tự động cuộn cinematic
│   ├── AudioController.tsx     # Bảng điều khiển âm thanh (Nhạc nền, SFX, Thuyết minh)
│   ├── Hero.tsx                # Màn mở đầu ấn tượng với hiệu ứng Zoom ngôi sao
│   ├── WordCascade.tsx         # Hiệu ứng chuyển cảnh chữ nghệ thuật (Typography interlude)
│   ├── QuoteSection.tsx        # Khung trích dẫn lời dạy bất hủ của Bác Hồ
│   ├── VietnamMapSection.tsx   # Bản đồ Tổ quốc Việt Nam với vệt sáng chạy dọc Bắc - Nam
│   ├── FinalSection.tsx        # Đoạn kết trang trọng & đúc kết tư tưởng
│   ├── Gallery.tsx             # Thư viện triển lãm ảnh tư liệu
│   ├── MediaSection.tsx        # Phòng đa phương tiện (Nghe ghi âm & Xem video tư liệu)
│   ├── Footer.tsx              # Chân trang & Thông tin nhóm thực hiện
│   ├── chapters/               # Các chương lịch sử: 1890, 1911, NguyenAiQuoc, 1941, 1945...
│   └── objects/                # Các biểu tượng SVG/Canvas: Sao vàng, Hoa sen, Con tàu, Chân dung...
├── data/                       # Dữ liệu nội dung các mốc lịch sử, thư viện ảnh, âm thanh
├── hooks/                      # Custom hooks: useGSAPScroll, useImageSequence
├── lib/                        # Thư viện hỗ trợ: Quản lý âm thanh, Lenis store, GSAP plugins
├── public/                     # Tài nguyên tĩnh (Hình ảnh WebP, Video, m4a/wav audio)
└── scripts/                    # Các script sinh/tối ưu hóa tài nguyên tự động
```

---

## Hướng dẫn cài đặt & Chạy ứng dụng

### 1. Yêu cầu môi trường
- **Node.js** >= 18.18.0 (khuyến nghị bản LTS mới nhất)
- **npm**, **pnpm** hoặc **yarn**

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Chạy ở môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

### 4. Build phiên bản Production
```bash
npm run build
npm run start
```

---

## Các lệnh bổ trợ (Utility Scripts)

Dự án có sẵn các công cụ tự động hóa xử lý dữ liệu và hình ảnh trong thư mục `scripts/`:

```bash
# Tái tạo và tối ưu hóa các tệp ảnh nền/kết cấu gốc (WebP)
npm run assets

# Kiểm tra cú pháp và chất lượng mã nguồn
npm run lint
```

---

## Nguyên tắc nội dung & Bản quyền tư liệu

1. **Tính trang trọng và chính xác:** Nội dung được biên soạn trên tinh thần tôn kính, khoa học và lịch sử, bám sát giáo trình *Tư tưởng Hồ Chí Minh* và các nguồn tư liệu chính thống (*Bảo tàng Hồ Chí Minh*, *Hồ Chí Minh Toàn tập* - NXB Chính trị Quốc gia Sự thật).
2. **Hình ảnh & Trích dẫn:** Tất cả các trích dẫn danh ngôn đều được đối chiếu chính xác theo văn bản gốc. Các đồ họa biểu tượng được thiết kế riêng nhằm bảo đảm bản quyền và trải nghiệm mỹ thuật đồng nhất.
3. **Mục đích:** Dự án phục vụ mục đích học tập, nghiên cứu và giáo dục phi thương mại.

---

## Nhóm tác giả thực hiện

**Học phần:** HCM202 – Tư tưởng Hồ Chí Minh  
**Đơn vị:** Đại học FPT (FPT University)  
**Nhóm thực hiện:** Nhóm 4 (Group 4) — Lớp SPST (FA26)

---

<p align="center">
  <i>Kính dâng lòng biết ơn vô hạn đối với Chủ tịch Hồ Chí Minh vĩ đại! 🇻🇳</i>
</p>
