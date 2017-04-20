Using NPM install the mustache node module so that you will be able to execute the subsequent exercises. After you have installed mustache, create a program.js file and output "Hello World" to the console using the Mustache.render method.

----------------------------------------------------------------------
## HINTS

Step 1) Install the mustache node module using NPM. You may install it globally or locally. See instructions here: https://github.com/janl/mustache.js#install

Step 2) Create a file named 'program.js'. This is the file you will test.

Step 3) For this exercise, copy the following lines into your program.js file. They should be the only lines in the file.

```js
// Require mustache as the Mustache variable
const Mustache = require('mustache');

//Output a Hello World message using mustache to render it
console.log(Mustache.render('Hello World'));
```

When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
