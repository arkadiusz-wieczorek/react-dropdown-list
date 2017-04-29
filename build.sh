watchify ./lib/index.jsx -o ./public/js/bundle.js -t [ babelify --presets [ es2015 react ] ] --verbose
