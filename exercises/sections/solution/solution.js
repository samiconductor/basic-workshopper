var mustache = require('mustache');
var view = JSON.parse(process.argv[2]);

var template = '<ul>{{#domain}}<li>{{name}}</li>{{/domain}}<ul></ul>';
console.log(mustache.render(template, view));