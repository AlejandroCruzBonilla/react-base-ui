import type { Config } from "tailwindcss"

const config = {
//   darkMode: ["class"],
  darkMode: "selector",
  content: [
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-primary-accent) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          foreground: "rgb(var(--color-secondary-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-secondary-accent) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
          foreground: "rgb(var(--color-success-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-success-accent) / <alpha-value>)",
        },
        info: {
          DEFAULT: "rgb(var(--color-info) / <alpha-value>)",
          foreground: "rgb(var(--color-info-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-info-accent) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
          foreground: "rgb(var(--color-warning-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-warning-accent) / <alpha-value>)",
        },
        help: {
          DEFAULT: "rgb(var(--color-help) / <alpha-value>)",
          foreground: "rgb(var(--color-help-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-help-accent) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgb(var(--color-danger) / <alpha-value>)",
          foreground: "rgb(var(--color-danger-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-danger-accent) / <alpha-value>)",
        },
        dark: {
          DEFAULT: "rgb(var(--color-dark) / <alpha-value>)",
          foreground: "rgb(var(--color-dark-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-dark-accent) / <alpha-value>)",
        },
        light: {
          DEFAULT: "rgb(var(--color-light) / <alpha-value>)",
          foreground: "rgb(var(--color-light-foreground) / <alpha-value>)",
		  accent: "rgb(var(--color-light-accent) / <alpha-value>)",
        },
		background:{
			DEFAULT:"rgb(var(--color-background) / <alpha-value>)",
			foreground: "rgb(var(--color-background-foreground) / <alpha-value>)",
			accent: "rgb(var(--color-background-accent) / <alpha-value>)",
		},

		border: "rgb(var(--color-border) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",

        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
	  boxShadow: {
        "raised": 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config