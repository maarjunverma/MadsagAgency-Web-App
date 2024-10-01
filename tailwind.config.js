// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primaryBody: 'D6EFD8',
//         primatyText: '5F0F40',
//         secondaryText: '9A031E',

//         logoText: {
//           light1: 'B60071',

//           dark2: '#B91C1C',
//         },
//         customBlue: {
//           light: '#93C5FD',
//           DEFAULT: '#3B82F6',
//           dark: '#1E3A8A',
//         },
//         buttonBg: {
//         dark:"387F39",
//         bublegum:'D10363',
//         btntext:'FFBF00',
//         },
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins with sans-serif fallback
        flexFont: ["Roboto Flex"],
      },

      colors: {
        primaryBody: "D6EFD8",
        primaryText: "5F0F40",
        secondaryText: "9A031E",

        logoText: {
          light1: "#B60071",

          dark2: "#B91C1C",
        },
        textcol: {
          text1: "#640D5F",
          text2: "#C7253E",
          text3: "#7C00FE",
        },
        backgrounds: {
          bg1: "#FCDE70",
          bg2: "#7C00FE",
          bg3: "#E90074",
          bg4: "#EB5B00",
        },
        btns: {
        bg1: "#FABC3F",
          bg2: "#E4003A",
        },
        // bggradients: {
        //   bggradients1: "linear-gradient(#0000, #ff7f50, #ff1493)",
        // },
      },
    },
  },
  plugins: [],
};
