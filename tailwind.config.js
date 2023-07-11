/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  prefix: 'whal3s-',
  important: '#whal3s-modal',
  theme: {
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem'}],
      sm: ['0.875rem', {lineHeight: '1.5rem'}],
      base: ['1rem', {lineHeight: '1.75rem'}],
      lg: ['1.125rem', {lineHeight: '2rem'}],
      xl: ['1.25rem', {lineHeight: '2rem'}],
      '2xl': ['1.5rem', {lineHeight: '2rem'}],
      '3xl': ['2rem', {lineHeight: '2.5rem'}],
      '4xl': ['2.5rem', {lineHeight: '3.5rem'}],
      '5xl': ['3rem', {lineHeight: '3.5rem'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
      '7xl': ['4.5rem', {lineHeight: '1.1'}],
      '8xl': ['6rem', {lineHeight: '1'}],
      '9xl': ['8rem', {lineHeight: '1'}],
    },
    extend: {

      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
        'shake-horizontal': 'shake-horizontal 1s infinite',
      },
      keyframes: {
        'shake-horizontal': {
          '0%, 100%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-5px)',
            animationTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',

          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(5px)',
            animationTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
          }
        },
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        'whal3s-gray': '#f1f0f0',
        zinc: {
          950: '#0b0b0b'
        },
        'whal3s': {
          '50': '#edf0ff',
          '100': '#dee5ff',
          '200': '#c4cdff',
          '300': '#a0acff',
          '400': '#7a80ff',
          '500': '#5d5afa',
          '600': '#503eef',
          '700': '#422fd3',
          '800': '#3729aa',
          '900': '#302986',
        },
        'purple': {
          '50': '#faf6fe',
          '100': '#f3ebfc',
          '200': '#e9dbf9',
          '300': '#d9bef4',
          '400': '#c194ec',
          '500': '#9e58dd',
          '600': '#944cd1',
          '700': '#7e39b7',
          '800': '#6a3396',
          '900': '#572b78',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: false, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

