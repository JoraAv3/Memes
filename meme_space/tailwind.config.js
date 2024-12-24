/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
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
        "howtobuy-mobile-bg": "url('/images/howtobuy_line_mobile.png')",
        rocket: "url('/images/rocket.png')",
        planets: "url('/images/planets.png')",
        moon: "url('/images/friends_moon.png')",
        cosmos: "url(/images/cirkatin.png)",
        "cosmo-view": "url('/images/cosmo_view.png')",
        sunshine: "radial-gradient(circle, rgba(255,215,0,1) 25%, rgba(255,69,0,0) 50%)",
        "radial-ellipse":
          "radial-gradient(closest-side, var(--tw-gradient-from), var(--tw-gradient-to))",
      },

      backgroundPosition: {
        "stars-lt": "left -80px top -80px",
        "cosmo-view-l": "left 0px top -140px",
        "center-t": "center 242px",
        "right-t": "-70px top",
        position: "var(--tw-pos-x) var(--tw-pos-y)",
      },
      backgroundSize: {
        "stars-dog": "33%",
        "cosmo-view-dog": "38%",
        "90%": "90%",
        "50%": "50%",
      },
      fontFamily: {
        Bowlby: ["Bowlby One", "serif"],
        Finlandica: ["Finlandica", "serif"],
        Anton: ["Anton", "serif"],
      },
      boxShadow: {
        "button-inner": "inset 0px 3px 8px 2px #FFFFD2",
      },
      textShadow: {
        light: "2px 2px 5px #FCAF54",
      },
      colors: {
        primary: "white",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
