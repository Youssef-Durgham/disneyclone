/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/background.png')"
      },
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
    screens: {
      'ssm': '280px',
      // => @media (min-width: 280px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'sm1': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '920px',
      // => @media (min-width: 920px) { ... }

      'mdb': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lgx': '1100px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
