/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      overflow: {
        'x-hidden': 'hidden overflow-x-hidden',
      },
      boxShadow: {
        'custom': '0px 30px 50px #0634FF57',
        'hover':'0px 30px 50px #808080',
        'full':'10px 10px 10px #808080'
      },
    },
  },
  plugins: [],
}

