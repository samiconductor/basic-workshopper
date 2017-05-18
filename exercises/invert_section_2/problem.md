I want to show my user that when they have nothing in their shopping cart a message that tells them their shopping cart is empty.  Cart will be an object variable.

## HINTS

Write a template that will use INVERT SECTIONS to output the text:
 ```
  Your shopping cart is empty
 ```
The actual string `{cart}` should be in the render.

The cart will be an object with an empty array:
```
When you're done
node solution.js '{"cart":["yo"]}'

node solution.js '{"cart":[]}'
```
 ----------------------------------------------------------------------

 ## HINTS
 Documentation on Invert Section: https://github.com/janl/mustache.js
