const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
var data = require('gulp-data');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', async function () {
  const bundle = await rollup.rollup({
  input: 'src/index.js'
  plugins: [resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }),commonjs({
    exclude: 'node_modules/**'
  }),babel({
      exclude: 'node_modules/**'
  })],
  external: ['jquery']
  });

  await bundle.write({
    file: './dist/docsify-pagefold.js',
    format: 'umd',
    name: 'library',
    sourcemap: true
  });
});