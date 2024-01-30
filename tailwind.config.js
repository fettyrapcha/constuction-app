/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f6f7f9",
        
        "color-button-label-primary": "#fff",
        grey: "#64748b",
        "light-black": "#040712",
        "menu-heading": "#5e74a1",
        "jenga-green": "#72b88a",
        black: "#000",
        gainsboro: "#dfe3e3",
        "greyscale-title": "#0f172a",
        gray: "#fbfbfc",
        darkgray: "#98a2b3",
        aliceblue: "#f1f5f9",
        "color-gray-gray-300": "#949bb5",
        "teal": "#0f766e",
        darkslategray: "#3a383e",
        mintcream: "#e8f8f2",
        seagreen: "#198f65",
        slategray: "#606f89",
        gainsboro: "#e4e4e6",
        black: "#000",
        dimgray: "#4a4b57",
        "sec-cta-stroke": "rgba(18, 55, 105, 0.08)",
        "grey-800": "#1d2939",

        salmon: "#e7605b",
        gray: "#222",
        "mile-black": "#0a0a0a",
       
       
        "light-black": "#040712",
        grey: "#64748b",
    
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        barlow: "Barlow",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      xs: "12px",
      lg: "18px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
