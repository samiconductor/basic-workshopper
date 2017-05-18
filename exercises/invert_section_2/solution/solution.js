console.log("test")
const mustache = require('mustache');

console.log(process.argv)

const view = JSON.parse(process.argv[2]);
const output = mustache.render("{{^cart}}Your shopping cart is empty{{/cart}}", view)
console.log(output);
