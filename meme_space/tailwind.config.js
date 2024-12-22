/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-top": "url('/images/bg_top.png')",
        "meme-space": "url('/images/section1.png')",
        stars: "url('/images/stars.png')",
        "cosmo-view-2": "url('/images/cosmo_view2.png')",
        "presale-bg": "url('/images/presale_bg.png')",
        "chart-bg": "url('/images/chart_background.png')",
        "howtobuy-bg": "url('/images/howtobuy_line.png')",
        rocket: "url('/images/rocket.png')",
        "cosmo-view": "url('/images/cosmo_view.png')",
        sunshine: "radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,69,0,0) 50%)",
        "radial-ellipse":
          "radial-gradient(closest-side, var(--tw-gradient-from), var(--tw-gradient-to))",
      },

      backgroundPosition: {
        "stars-lt": "left -80px top -80px",
        "cosmo-view-l": "left 0px top -140px",
      },
      backgroundSize: {
        "stars-dog": "33%",
        "cosmo-view-dog": "38%",
      },
      fontFamily: {
        Bowlby: ["Bowlby One", "serif"],
        Finlandica: ["Finlandica", "serif"],
        Anton: ["Anton", "serif"],
      },
      boxShadow: {
        "button-inner": "inset 0px 3px 8px 2px #FFFFD2",
      },
    },
  },
  plugins: [],
};
