import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add text color #717270 as body color
      colors: {
        "gray-body": "#C6C6C6",
        lightGold: "#F1CD77",
        mediumGold: "#D9A741",
        darkGold: "#BB853B",
      },
    },
  },
  plugins: [],
} satisfies Config;
