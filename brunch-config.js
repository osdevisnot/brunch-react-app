module.exports = {
  files: {
    javascripts: {
      // in development mode, join all files into app.js
      // currently this is mandatory for HMR to work correctly
      joinTo: 'app.js'
    }
  },
  server: {
    port: 9000 // default port for the pushState server
  },
  modules: {
    // auto-require so that we dont have to write this in index.html
    autoRequire: {
      'app.js': ['app']
    }
  },
  plugins: {
    // use babelrc so that babel config is shared between brunch and jest
    babel: { babelrc: true },
    // PWA for production. by default this will cache everything in public folder
    swPrecache: {
      autorequire: ['public/index.html'],
      options: { staticFileGlobs: ['public/**/!(*map*)'], stripPrefix: 'public/' }
    }
  },
  hot: true, // this enables the HMR api
  overrides: {
    development: {
      plugins: {
        // don't need PWA in dev mode
        off: ['sw-precache-brunch']
      }
    },
    production: {
      files: {
        javascripts: { joinTo: { 'vendor.js': /^(?!app)/, 'app.js': /^app/ } }
      },
      plugins: {
        off: ['auto-reload-brunch', 'hmr-brunch']
      },
      optimize: true,
      sourceMaps: true,
      hot: false // don't need reloading and HMR in prod
    }
  }
};
