import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        move: '#0F3A26',
        'move-light': '#164A31',
        lime: '#B4F05A',
        soft: '#EFF1EC',
        ice: '#BFEDEB',
        mint: '#D4F2D2',
        orange: '#FF7A45',
        leaf: '#3D7A2A',
        muted: '#3D5A4A',
        haze: '#D4DDD6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
