const { src, dest, parallel } = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const swig = require('gulp-swig')
const imagemin = require('imagemin')

const data = {
  foo: {
    bar: 'bar',
    baz: 'baz'
  }
}

const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })
    .pipe(sass())
    .pipe(dest('dist'))
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(dest('dist'))
}

const page = () => {
  return src('src/*.html', { base: 'src' })
    .pipe(swig({ data }))
    .pipe(dest('dist'))
}

const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}

const compile = parallel(style, script, page, image, font)

module.exports = {
  compile,
  image,
  font
}
