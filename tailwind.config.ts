import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: { sans: ["Inter", "system-ui", "sans-serif"], serif: ["Playfair Display", "Georgia", "serif"], display: ["Bebas Neue", "Impact", "sans-serif"] } } }
};
export default config;
