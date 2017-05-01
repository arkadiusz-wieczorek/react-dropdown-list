watchify ./lib/some-test-component.jsx -o ./public/js/bundle.js -t [ babelify --presets [ es2015 react ] ] --verbose
