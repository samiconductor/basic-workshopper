const basicWorkshopper = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass')
});

basicWorkshopper.addAll([
  'BASIC EXERCISE',
  'INSTALL MUSTACHE',
  'VARIABLES',
  'SECTIONS',
  'FALSE VALUES OR EMPTY LISTS',
  'INVERT SECTION 2'
])

module.exports = basicWorkshopper;
