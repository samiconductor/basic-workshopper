Write a template that will use variable substitution to output the text:
```
Charlotte's {{favorite}} color is blue
```
The name and favorite color should be changed. The actual string `{{favorite}}` should be in the output.

Given the hash:
```json
{
  "name": "Charlotte",
  "favorites": {
    "color": "blue"
  }
}
```
----------------------------------------------------------------------

## HINTS
Documentation on variables: https://github.com/janl/mustache.js#variables

Your program will receive the hash as stringified json as the only argument.
