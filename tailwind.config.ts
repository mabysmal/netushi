import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'red': '#ff3131',
        'dark-red' : '#490d0d',
      },
      fontFamily: {
        'beach': ['var(--font-beach-resort)'],
        'gotham': ['var(--font-gotham)'],
        'sourcesans': ['var(--font-source-sans)'],
      },
      backgroundImage: {
        'brush-stroke': "url('/brush-stroke2.png')",
      },
      backgroundSize: {
        '3x': '300%', // Valor personalizado para 3 veces el tamaño original
      },
    },
  },
  plugins: [],
} satisfies Config;
