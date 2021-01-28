module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontSize: {
      //   mammoth: ["10rem", { lineHeight: "1rem" }],
      // },
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.5em",
      },
      spacing: {
        108: "27rem",
        120: "30rem",
        132: "33rem",
        136: "36rem",
        140: "39rem",
        144: "42rem",
        156: "52rem",
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
