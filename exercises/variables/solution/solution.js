const mustache = require('mustache');

const view = JSON.parse(process.argv[2]);
const output = mustache.render("{{name}}'s {{=<% %>=}}{{favorite}}<%={{ }}=%> color is {{favorites.color}}", view)
console.log(output);
