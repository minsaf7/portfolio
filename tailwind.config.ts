import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primary: {
          100: "#7a1d1d",
          500: "#741b1b",
          900: "#5a0e0e",
        },
        secondary: "#7630a1"
      },
    },
  },
  plugins: [],
};
export default config;


//Deep blue and tan – color palette
// Sand Tan: #e1b382

// Sand Tan Shadow: #c89666

// Night Blue: #2d545e

// Night Blue Shadow: #12343b





// Are ya yellow?!: #feda6a

// Silver Fox: #d4d4dc

// Deep Matte Grey: #393f4d

// Dark Slate: #1d1e22