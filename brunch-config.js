module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    babel: { babelrc: true },
    swPrecache: {
      autorequire: ['public/index.html'],
      options: { staticFileGlobs: ['public/**/!(*map*)'], stripPrefix: 'public/' }
    }
  },
  hot: true,
  overrides: {
    development: {
      plugins: {
        off: ['sw-precache-brunch']
      }
    },
    production: {
      files: {
        javascripts: { joinTo: { 'vendor.js': /^(?!app)/, 'app.js': /^app/ } }
      },
      optimize: true,
      sourceMaps: true,
      hot: false
    }
  }
};
