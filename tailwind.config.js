/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#027DC0',
        'secondary' : '#D95F1E',
        'black' : '#000',
        'white' : '#fff',
        'primary-light' : '#F2F8FC',
        'primary-light_ii' : '#EDF8FF',
        'gray' : '#626974'
      },
      fontFamily : {
        bitskraftReg: ['GT-Walsheim-Regular','sans-serif'],
        bitskraftMid: ['GT-Walsheim-Medium','sans-serif'],
        bitskraftLig: ['GT-Walsheim-Light','sans-serif'],
        bitskraftBol: ['GT-Walsheim-Bold','sans-serif'],
        bitskraftBla: ['GT-Walsheim-Black','sans-serif']
      },
      borderRadius : {
        'button' : '0.75rem',
      },
      boxShadow : {
        'wbutton' : '0px 3px 40px 0px rgba(0, 0, 0, 0.08)',
        'bbutton' : '0px 20px 50px 0px rgba(2, 125, 192, 0.20)',
        'cshadow' : '0px 30px 40px 0px rgba(2, 125, 192, 0.04)',
      }
    },
  },
  plugins: [],
}

