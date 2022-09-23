module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        night: {
          primary: "#17F5AB",
          secondary: "#ffff",
          neutral: "#F3F4F6",
          "base-100": "#0A0F1F",
          info: "#F9BA39",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
