import { nextui } from "@nextui-org/theme";
const defaultTheme = require("tailwindcss/defaultTheme");
import daisyui from "daisyui"

const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-x": "var(--color-primary-x)",
        secondary: "var( --color-secondary)",
        "secondary-x": "var( --color-secondary-x)",
        teretiary: "var(--color-teretiary)",
        "teretiary-x": "var( --color-teretiary-x)",

        "txt-primary": "var(--text-primary)",
        "txt-secondary": "var(--text-secondary)",
        button: "var(--color-typography)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors, nextui(), require("tailwindcss-animate"),daisyui],
  darkMode: ["class", "class"],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
