module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './src/public/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',

      './playground/public/**/*.html',
      './playground/src/**/*.vue',
      './playground/src/**/*.js',
      './playground/src/**/*.jsx'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  important: '#app',
  theme: {
    extend: {
      fontSize: {
        'ns': '12px',
        'nm': '14px',
        'nl': '32px'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover'],
      textDecoration: ['active', 'hover'],
    },
  },
  plugins: [],
}
