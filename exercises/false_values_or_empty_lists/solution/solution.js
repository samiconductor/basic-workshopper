const mustache = require('mustache');

const hash = JSON.parse(process.argv[2]);

const template = `
  {{first_name}}'s Car:
  {{#car}}
    You won't see me!
  {{/car}}
`;

console.log(mustache.render(template, hash));
