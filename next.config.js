const withLess = require('@zeit/next-less')

const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, { defaultConfig }) => {
  return {
    // assetPrefix: isProd ? 'https://cdn.aliyun.com' : '',
    ...withLess({})
  }
}
