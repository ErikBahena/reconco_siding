import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add text color #717270 as body color
      colors: {
        "gray-body": "#C6C6C6",
        gold: "hsl(41,94%,80%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
