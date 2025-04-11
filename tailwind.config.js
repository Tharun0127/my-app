const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        franklin: ["FranklinGothic", "sans-serif"], // Using the font-family defined in `fonts.css`
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      colors: {
        primary: "#001F3F",
        "primary-dark": "#3A6D8C",
        "primary-light": "#6A9AB0",
        secondary: "#F8EDED",
        "secondary-dark": "#E2DAD6",
        "secondary-light": "#3A6D8C",
        accent: "#e3342f",
        "accent-dark": "#cc1f1a",
        "accent-light": "#ef5753",
        neutral: "#f8fafc",
        "neutral-dark": "#dae1e7",
        "neutral-light": "#ffffff",
        "custom-blue": "#005F73",
        "custom-yellow": "#FFDD67",
        "custom-green": "#1F8A70",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}
