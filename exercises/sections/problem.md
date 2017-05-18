Write a template that will create an unordered list of the repo names.

----------------------------------------------------------------------
## HINTS

Sections render blocks of text one or more times, depending on the value of the key in the current context.

A section begins with a pound and ends with a slash. That is, {{#person}} begins a "person" section while {{/person}} ends it.

If the person key exists and has a non-false value, the HTML between the pound and slash will be rendered and displayed one or more times.

```mustache
{
  "person": [
    { "name": "eric" },
    { "name": "jeremy" }
  ]
}
```
Output:
```mustache
<b>eric</b>
<b>jeremy</b>
```


When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
