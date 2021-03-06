const redirects = require('./functions/redirects')

module.exports = {
  webpack(config) {
    config.node = {fs: 'empty'} // Fixes NPM packages that depend on the `fs` module.
    return config
  },
  async redirects() {
    return redirects
  },
  async rewrites() {
    return [
      {source: '/slides', destination: '/slides/index.html'},
      {source: '/meals', destination: '/meals/index.html'}
    ]
  }
}
