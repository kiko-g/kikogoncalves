import { type Config } from "tailwindcss"
import typographyStyles from "./typography"
import tailwindcssAnimate from "tailwindcss-animate"
import typographyPlugin from "@tailwindcss/typography"
import formsPlugin from "@tailwindcss/forms"

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [typographyPlugin, formsPlugin, tailwindcssAnimate],
  theme: {
    typography: "typographyStyles",
    fontSize: {
      xxs: [
        "0.725rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      xs: [
        "0.8125rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "4xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    minWidth: {
      "96": "24rem",
      "112": "28rem",
      "128": "32rem",
      "144": "36rem",
      "160": "40rem",
    },
    extend: {
      colors: {
        feup: "#842a18",
        zinc: {
          "25": "#fbfcfc",
          "150": "#f0f0f1",
          "925": "#121215",
        },
        navy: {
          "25": "#fbfcfc",
          "50": "#f9fafa",
          "100": "#f3f4f5",
          "200": "#e4e5e9",
          "300": "#d2d4d9",
          "400": "#9ea2ac",
          "500": "#6e717d",
          "600": "#4e535f",
          "700": "#3b404b",
          "800": "#232830",
          "900": "#141821",
          "950": "#0b0e18",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        shine: "shine var(--duration) infinite linear",
      },
      keyframes: {
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },
} satisfies Config
