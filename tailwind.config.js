const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: '#0D112B',
          'primary-focus': '#0D112B',
          'primary-content': '#E1E3E3',
          'base-100': '#090B15',
          'base-200': '#353545',
          'base-300': '#303239',
          'base-content': '#E1E3E3',
          success: '#5ADB82',
          'success-content': '#000000',
          warning: '#F6A414',
          'warning-content': '#FFFFFF',
          error: '#F87272',
          'error-content': '#FFFFFF',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
