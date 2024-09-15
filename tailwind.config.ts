import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        drop: {
          '0%': { height: '0', opacity: '1' },
          '100%': { height: '100%', opacity: '1' },
        },
      },
      animation: {
        drop: 'drop 1.5s ease-out infinite',
      },
    
  


        colors: {
      "mcolor-red-red-50": "rgba(252, 233, 237, 1)",
      "mcolor-red-red-100": "rgba(246, 188, 198, 1)",
      "mcolor-red-red-200": "rgba(241, 156, 171, 1)",
      "mcolor-red-red-300": "rgba(235, 110, 132, 1)",
      "mcolor-red-red-400": "rgba(231, 82, 109, 1)",
      "mcolor-red-red-500": "rgba(225, 39, 72, 1)",
      "mcolor-red-red-600": "rgba(205, 35, 66, 1)",
      "mcolor-red-red-700": "rgba(160, 28, 51, 1)",
      "mcolor-red-red-800": "rgba(124, 21, 40, 1)",
      "mcolor-red-red-900": "rgba(95, 16, 30, 1)",
      "mcolor-navy-navy-50": "rgba(231, 231, 235, 1)",
      "mcolor-navy-navy-100": "rgba(179, 182, 193, 1)",
      "mcolor-navy-navy-200": "rgba(142, 146, 163, 1)",
      "mcolor-navy-navy-300": "rgba(91, 97, 122, 1)",
      "mcolor-navy-navy-400": "rgba(59, 66, 96, 1)",
      "mcolor-navy-navy-500": "rgba(10, 19, 56, 1)",
      "mcolor-navy-navy-600": "rgba(9, 17, 51, 1)",
      "mcolor-navy-navy-700": "rgba(7, 13, 40, 1)",
      "mcolor-navy-navy-800": "rgba(6, 10, 31, 1)",
      "mcolor-navy-navy-900": "rgba(4, 8, 24, 1)",
      "mcolor-purple-purple-50": "rgba(232, 232, 238, 1)",
      "mcolor-purple-purple-100": "rgba(184, 184, 202, 1)",
      "mcolor-purple-purple-200": "rgba(150, 150, 177, 1)",
      "mcolor-purple-purple-300": "rgba(102, 102, 141, 1)",
      "mcolor-purple-purple-400": "rgba(73, 72, 119, 1)",
      "mcolor-purple-purple-500": "rgba(27, 26, 85, 1)",
      "mcolor-purple-purple-600": "rgba(25, 24, 77, 1)",
      "mcolor-purple-purple-700": "rgba(19, 18, 60, 1)",
      "mcolor-purple-purple-800": "rgba(15, 14, 47, 1)",
      "mcolor-purple-purple-900": "rgba(11, 11, 36, 1)",
      "mcolor-neon-neon-50": "rgba(231, 251, 253, 1)",
      "mcolor-neon-neon-100": "rgba(179, 241, 250, 1)",
      "mcolor-neon-neon-200": "rgba(142, 234, 248, 1)",
      "mcolor-neon-neon-300": "rgba(91, 225, 244, 1)",
      "mcolor-neon-neon-400": "rgba(59, 219, 242, 1)",
      "mcolor-neon-neon-500": "rgba(10, 210, 239, 1)",
      "mcolor-neon-neon-600": "rgba(9, 191, 217, 1)",
      "mcolor-neon-neon-700": "rgba(7, 149, 170, 1)",
      "mcolor-neon-neon-800": "rgba(6, 116, 131, 1)",
      "mcolor-neon-neon-900": "rgba(4, 88, 100, 1)",
      "mcolor-neonpurple-neonpurple-50": "rgba(245, 232, 255, 1)",
      "mcolor-neonpurple-neonpurple-100": "rgba(225, 182, 254, 1)",
      "mcolor-neonpurple-neonpurple-200": "rgba(210, 147, 254, 1)",
      "mcolor-neonpurple-neonpurple-300": "rgba(189, 98, 254, 1)",
      "mcolor-neonpurple-neonpurple-400": "rgba(177, 68, 253, 1)",
      "mcolor-neonpurple-neonpurple-500": "rgba(157, 21, 253, 1)",
      "mcolor-neonpurple-neonpurple-600": "rgba(143, 19, 230, 1)",
      "mcolor-neonpurple-neonpurple-700": "rgba(111, 15, 180, 1)",
      "mcolor-neonpurple-neonpurple-800": "rgba(86, 12, 139, 1)",
      "mcolor-neonpurple-neonpurple-900": "rgba(66, 9, 106, 1)"
    
      },
      fontFamily: {
      'libre-baskerville': ['"Libre Baskerville"', 'serif'],
        'clash-display': ['"Clash Display"', 'sans-serif'],
    },
  },
  plugins: [],
}
};
export default config;
