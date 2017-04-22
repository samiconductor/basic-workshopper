var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');

var _ = require('lodash');
var faker = require('faker');

function rand() {
    return Math.floor(Math.random() * (10)) + 1;
}

function domains() {
    return  _.times(rand(), function(){ return {"name": faker.internet.domainName() }});
}
// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
exercise = comparestdout(exercise);


exercise.addSetup(function (mode, callback) {

    const view = { domain: domains() };
    var args = [JSON.stringify(view)];


    // supply the args to the 'execute' processor for both
    // solution and submission spawn()
    this.submissionArgs = this.solutionArgs = args;

    process.nextTick(callback)
});

module.exports = exercise;
