/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1C3F3A",
        ivory: "#EBE8D8",
        ink: "#0B0D0C",
        graphite: "#111513",
        carbon: "#171B19",
        smoke: "#66706B",
        mist: "#A8B0AB",
        "accent-soft": "#D7D1BB",
        "surface-dark": "#0F1312",
        "surface-elevated": "#151A18",
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        panel: "28px",
        card: "24px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        "card-light": "0 10px 30px rgba(15,18,17,0.06)",
        "card-dark": "0 20px 60px rgba(0,0,0,0.35)",
        "btn": "0 10px 24px rgba(17,21,19,0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

