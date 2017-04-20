const _ = require('lodash');
var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)


exercise.addSetup(function (mode, callback) {
  const input = {
    name: _.sample(['Alan', 'Bob', 'Charlotte', 'Steven']),
    favorites: {
      number: Math.floor(Math.random() * (10)) + 1,
      color: _.sample(['azure', 'blue', 'cyan'])
    }
  }
  _.sample([])
  var args = [ JSON.stringify(input) ]


  // supply the args to the 'execute' processor for both
  // solution and submission spawn()
  this.submissionArgs = this.solutionArgs = args

  process.nextTick(callback)
})

module.exports = exercise
