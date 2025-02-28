module.exports = {
    theme: {
      extend: {
        fontFamily: {
          poppins: ["var(--font-poppins)", "sans-serif"],
        },
        colors: {
          primary: '#9370d8',
        },
      },
    },
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  }
  