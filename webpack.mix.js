const mix = require('laravel-mix');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const customConfig = {
   resolve: {
      alias:{
         '@app': path.resolve('./resources/js'),


         // point to nice-admin which is the free admin template
         '@nice-admin': path.resolve('./resources/nice-admin')
      }
   },

   plugins: [
      new CompressionPlugin()
   ]
};

if (process.env.NODE_ENV === 'analyze') {
   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
   customConfig.plugins.push(new BundleAnalyzerPlugin());
}

mix.webpackConfig(customConfig);

mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css')
.copyDirectory('resources/nice-admin/assets/images/', 'public/nice-admin/assets/images');

// mix.browserSync({
//    proxy: process.env.MIX_SENTRY_DSN_PUBLIC,
//    files: [
//       'public/js/app.js',
//       'public/css/app.css',
//       'app/*.php'
//    ],
//    watchOptions: {
//       ignored: "/node_modules/"
//    },
//    notify: false
// });

