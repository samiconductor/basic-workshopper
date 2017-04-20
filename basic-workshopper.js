const basicWorkshopper = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass')
})

basicWorkshopper.addAll([
  'BASIC EXERCISE',
<<<<<<< HEAD
  'INVERT SECTION',
  'INVERT SECTION 2'
=======
  'INSTALL MUSTACHE',
  'VARIABLES'
>>>>>>> 6c5e8b1785f7eb39639c38e15e202cf664459750
])

module.exports = basicWorkshopper
