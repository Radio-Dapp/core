/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

const heroUIThemesProps = {
  light: {
    colors: {
      grey: {
        DEFAULT: "#ffffff",
        0: "#ffffff",
        50: "#f5f5f5",
        100: "#F1F1F1",
        200: "#E5E5E5",
        250: "#E0E0E0",
        300: "#D5D5D5",
        400: "#ABABAB",
        500: "#737373",
        600: "#5C5C5C",
        700: "#454545",
        800: "#232323",
        900: "#121212",
        950: "#0a0a0a",
      },
      foreground: "#0D120B",
      primary: {
        DEFAULT: "#7DB569",
        50: "#F2F8F0",
        100: "#E5F0E1",
        200: "#CBE1C3",
        300: "#B1D3A5",
        400: "#97C487",
        500: "#7DB569",
        600: "#649154",
        700: "#4B6D3F",
        800: "#32482A",
        900: "#192415",
        950: "#0D120B",
        foreground: "#F1F1F1",
      },
      muted: {
        DEFAULT: "#ABABAB",
        foreground: "#000000",
      },
      border: "#d4d4d4",
      destructive: {
        DEFAULT: "#ff3367",
        50: "#ffe5ef",
        100: "#ffccd9",
        200: "#ff99b3",
        300: "#ff668d",
        400: "#ff3367",
        500: "#f4125e",
        600: "#cc104e",
        700: "#99103b",
        800: "#660028",
        900: "#330014",
        950: "#19000a",
      },
    },
  },
  dark: {
    colors: {
      grey: {
        DEFAULT: "#0a0a0a",
        0: "#000000",
        50: "#0a0a0a",
        100: "#121212",
        200: "#212121",
        250: "#282828",
        300: "#454545",
        600: "#ABABAB",
        400: "#5C5C5C",
        500: "#737373",
        700: "#D5D5D5",
        800: "#E3E3E3",
        900: "#F1F1F1",
        950: "#f5f5f5",
      },
      foreground: "#F2F8F0",
      primary: {
        DEFAULT: "#7DB569",
        50: "#F2F8F0",
        100: "#E5F0E1",
        200: "#CBE1C3",
        300: "#B1D3A5",
        400: "#97C487",
        500: "#7DB569",
        600: "#649154",
        700: "#4B6D3F",
        800: "#32482A",
        900: "#192415",
        950: "#0D120B",
        foreground: "#121212",
      },
      muted: {
        DEFAULT: "#5C5C5C",
        foreground: "#000000",
      },
      border: "#2c2c2c",
      destructive: {
        DEFAULT: "#ff3367",
        50: "#ffe5ef",
        100: "#ffccd9",
        200: "#ff99b3",
        300: "#ff668d",
        400: "#ff3367",
        500: "#f4125e",
        600: "#cc104e",
        700: "#99103b",
        800: "#660028",
        900: "#330014",
        950: "#19000a",
      },
    },
  },
};

export default {
  content: [
    "./src/**/*.{ts,tsx,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
      borderRadius: {
        xs: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 2px)",
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) + 2px)",
        lg: "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 6px)",
      },
      height: { "2px": "2px" },
      fontFamily: {
        openSans: "Open Sans, sans-serif",
        manrope: "Manrope, sans-serif",
        garet: "Garet, sans-serif",
        codecPro: "Codec Pro, sans-serif",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: heroUIThemesProps,
    }),
  ],
};
