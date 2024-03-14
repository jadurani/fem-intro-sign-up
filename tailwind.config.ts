import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px"
    },
    fontSize: {
      body2: "0.8rem",
      body1: "1rem",
      h6: "1rem",
      h5: "1.25rem",
      h4: "1.563rem",
      h3: "1.953rem",
      h2: "2.441rem",
      h1: "3.052rem",
    },
    extend: {
      colors: {
        red: "#FF7979",
        green: "#38CC8B",
        purple: "#5E54A4",
        neutral: "#3D3B48",
        gray: "#BAB7D4"
      },
      backgroundImage: {
        'desktop-pattern': "url('/images/bg-intro-desktop.png')",
      },
      fontFamily: {
        body: ["var(--app-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
