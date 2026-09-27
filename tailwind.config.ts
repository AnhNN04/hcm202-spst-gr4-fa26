import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Classical Exhibition palette — warm, earthy, dignified
        'vn-red':         '#a82018',   // son đỏ trầm — dịu hơn, ấm hơn đỏ cờ
        'vn-red-deep':    '#6e1410',   // đỏ son sẫm
        'vn-gold':        '#c49a2e',   // vàng antique — trầm, không chói
        'vn-gold-antique':'#9e7820',   // vàng cổ sâu hơn
        'vn-ivory':       '#e8d5b0',   // giấy dó ấm — không trắng lạnh
        'vn-parchment':   '#d4bc90',   // giấy parchment — nền trích dẫn
        'vn-brown':       '#7a5c3a',   // nâu đất
        'vn-charcoal':    '#1c1712',   // nâu đen ấm thay charcoal lạnh
        'vn-black':       '#0f0c09',   // đen ấm — nâu đen, không đen lạnh
        'vn-sepia':       '#2e2318',   // nâu sepia trung — nền các section
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-be-vietnam)', 'Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        cinematic: '0.35em',
        wide2: '0.18em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
