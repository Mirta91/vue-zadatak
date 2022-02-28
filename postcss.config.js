module.exports = ({ env }) => {
  return {
    plugins: {
      'postcss-import': {},
      'tailwindcss': './tailwind.config.js',
      'autoprefixer': {}
    }
  }
}