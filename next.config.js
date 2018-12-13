// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/adamcurtisvt.github.io/' : '',
  // https://github.com/vercel/next.js/issues/21079
  images: {
    loader: "imgix",
    path: "",
  }
}