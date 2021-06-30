const isProd = process.env.NODE_ENV === 'rollup-production'

module.exports = {
  plugins: {
    tailwindcss: {
      config: isProd ? './playground/tailwind.config.js' : './tailwind.config.js'
    },
    autoprefixer: {},
  }
}
