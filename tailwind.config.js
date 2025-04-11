/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0080ff",
          foreground: "#ffffff",
          50: "#e6f2ff",
          100: "#cce6ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#0080ff",
          600: "#0066cc",
          700: "#004d99",
          800: "#003366",
          900: "#001a33",
          950: "#000d1a",
        },
        navy: {
          50: "#f2f3f9",
          100: "#e6e8f2",
          200: "#cdd1e6",
          300: "#b4bad9",
          400: "#9ba3cc",
          500: "#828cbf",
          600: "#6975b3",
          700: "#515d9c",
          800: "#1a2142", // Darker blue
          900: "#0f1535", // Even darker blue
          950: "#070b20", // Almost black-blue
        },
        neon: {
          blue: "#00f6ff",
          purple: "#9000ff",
          pink: "#ff00f6",
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
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #0080ff, 0 0 10px #0080ff, 0 0 15px #0080ff",
            opacity: 1,
          },
          "50%": {
            boxShadow: "0 0 10px #0080ff, 0 0 20px #0080ff, 0 0 30px #0080ff",
            opacity: 0.8,
          },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
