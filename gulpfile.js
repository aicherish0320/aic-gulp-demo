const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))

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

module.exports = {
  style,
  script
}
