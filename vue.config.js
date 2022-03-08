module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue3-week6-router/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: '螞蟻人甜點購物網',
    },
  },
};
