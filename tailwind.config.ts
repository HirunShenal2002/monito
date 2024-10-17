import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#003459",
        "secondary": "#F7DBA7",
        "secondary-80": "#EEC77E",
        "secondary-60": "#F1D092",
        "secondary-40": "#FCEED5",
        "state-red": "#FF564F",
        "state-green": "#34C759",
        "state-orange": "#FF912C",
        "state-blue": "#00A7E7",
        "neutral-100": "#00171F",
        "neutral-80": "#242B33",
        "neutral-60": "#667479",
        "neutral-40": "#99A2A5",
        "neutral-20": "#CCD1D2",
        "neutral-10": "#EBEEEF",
        "neutral-00": "#FDFDFD",

        "btn-primary-1" : "#002A48",
        "btn-primary-2" : "#003459",
        "btn-secondary-1" : "#00528C",
        "btn-secondary-2" : "#0078CD",
      },
      fontFamily: {
        "Gilroy-Bold": ["Gilroy-Bold", "sans-serif"],
        "Gilroy-Medium": ["Gilroy-Medium", "sans-serif"],
        "Gilroy-Regular": ["Gilroy-Regular", "sans-serif"],
        "Gilroy-SemiBold": ["Gilroy-SemiBold", "sans-serif"]
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
