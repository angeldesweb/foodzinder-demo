const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui:{
    themes:[
      {
        mytheme: {
          primary: "#f67599",
          secondary: "#121921",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  plugins: [require('daisyui')],
};

module.exports = config;
