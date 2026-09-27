import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import FilmGrain from '@/components/FilmGrain';

export const metadata: Metadata = {
  title: 'HÀNH TRÌNH THEO CHÂN BÁC',
  description:
    'Một hành trình – Một lý tưởng – Một cuộc đời vì dân tộc. Triển lãm số tương tác về cuộc đời Chủ tịch Hồ Chí Minh.',
  keywords: ['Hồ Chí Minh', 'lịch sử Việt Nam', 'triển lãm số', 'độc lập tự do'],
};

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-vn-black text-vn-ivory antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <FilmGrain />
      </body>
    </html>
  );
}
