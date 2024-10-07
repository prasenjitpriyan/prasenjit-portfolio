const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "snow-drift": {
        "50": "#fbfcf8",
        "100": "#eef2e2",
        "200": "#dde5c3",
        "300": "#c9d49d",
        "400": "#b7c275",
        "500": "#acb55a",
        "600": "#a4a74f",
        "700": "#8b8a43",
        "800": "#716e3b",
        "900": "#5c5a32",
        "950": "#312f19",
      },
      "my-color": {
        "50": "#d3d9d4",
        "100": "#748d92",
        "200": "#124e66",
        "300": "#2e3944",
        "400": "#212a31",
      },
    },
  },
  plugins: [addVariablesForColors],
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
