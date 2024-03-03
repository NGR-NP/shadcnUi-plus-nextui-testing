import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        swing: {
          "20%": {
            transform: "rotate(25deg)",
            "transition-timing-function": "cubic-bezier(0.45, 0, 1, 1)",
          },
          "40%": {
            transform: "rotate(-10deg)",
            "transition-timing-function": "cubic-bezier(0.45, 0, 1, 1)",
          },
          "60%": {
            transform: "rotate(10deg)",
            "transition-timing-function": "cubic-bezier(0.45, 0, 1, 1)",
          },
          "80%": {
            transform: "rotate(-10deg)",
            "transition-timing-function": "cubic-bezier(0.45, 0, 1, 1)",
          },
          "100%": {
            transform: "rotate(0deg)",
            "transition-timing-function":
              "cubic-bezier(0.16, 0.88, 0.32, 1.28)",
          },
        },
      },
      animation: {
        swing: "swing 1s ease-in-out ",
      },
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      prefix: "NGR",
      // defaultTheme: "dark",
      // defaultExtendTheme: "dark",

      themes: {
        light: {
          colors: {
            primary: {
              foreground: "hsl(0 0% 100%)",
              DEFAULT: "hsl(142 76% 36%)",

              50: "hsl(143 168% 95%)",
              100: "hsl(142 68% 90%)",
              200: "hsl(142 68% 79%)",
              300: "hsl(142 68% 69%)",
              400: "hsl(142 68% 58%)",
              500: "hsl(142 76% 47%)",
              600: "hsl(142 76% 38%)",
              700: "hsl(142 76% 29%)",
              800: "hsl(142 76% 19%)",
              900: "hsl(142 76% 10%)",
            },
            focus: {
              DEFAULT: "hsl(142 76% 36%)",
            },
            secondary: {
              DEFAULT: "hsl(321 76% 47%)",
              foreground: "hsl(0 0% 100%)",

              50: "hsl(321 71% 95%)",
              100: "hsl(321 68% 89%)",
              200: "hsl(321 68% 79%)",
              300: "hsl(321 68% 68%)",
              400: "hsl(321 68% 58%)",
              500: "hsl(321 76% 47%)",
              600: "hsl(321 76% 38%)",
              700: "hsl(321 76% 28%)",
              800: "hsl(321 76% 19%)",
              900: "hsl(321 76% 9%)",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              900: "hsl(142 70% 10%)",
              800: "hsl(142 70% 19%)",
              700: "hsl(142 70% 29%)",
              600: "hsl(142 70% 38%)",
              500: "hsl(142 70% 47%)",
              400: "hsl(142 62% 58%)",
              300: "hsl(142, 64%, 69%)",
              200: "hsl(142 62% 79%)",
              100: "hsl(142 62% 90%)",
              50: "hsl(143 62% 95%)",

              foreground: "hsl(142, 70%, 99%)",
              DEFAULT: "hsl(142 70% 45%)",
            },
            secondary: {
              900: "hsl(322 69% 9%)",
              800: "hsl(322 69% 19%)",
              700: "hsl(322 69% 28%)",
              600: "hsl(322 69% 38%)",
              500: "hsl(322 69% 47%)",
              400: "hsl(322 71% 58%)",
              300: "hsl(322 71% 68%)",
              200: "hsl(322 71% 79%)",
              100: "hsl(322 71% 89%)",
              50: "hsl(322 75% 95%)",

              foreground: "hsl(0 0% 100%)",
              DEFAULT: "hsl(322 71% 58%)",
            },
            focus: {
              DEFAULT: "hsl(142 70% 45%)",
            },
          },
        },
      },
    }),
  ],
};
export default config;
