import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proquality: "Lexend",
      },
      colors: {
        problue: "#195973",
        problack: "#101010",
        progray: "#e1e1e1",
      },
      fontSize: {
        titles: "32px",
        subtitles: "26px",
        para: "20px",
        smtitles: "26px",
        smsubtitles: "18px",
        smpara: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
