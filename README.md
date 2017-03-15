# Creating a Workshopper

**Canonical Example:**

- `learnyounode` → [github.com/workshopper/learnyounode](https://github.com/workshopper/learnyounode)
- depends on
  - `workshopper-adventure` → [github.com/workshopper/workshopper-adventure](https://github.com/workshopper/workshopper-adventure)
  - `workshopper-excercise` → [github.com/workshopper/workshopper-exercise](https://github.com/workshopper/workshopper-exercise)

**Responsibilities:**

- Frontend → `workshopper-adventure`
  - Displaying the exercise selection list
  - Displaying a problem
  - Running and verifying an exercise
  - Internationalization

- Test Suite → `workshopper-exercise`
  - Setting up an exercise
  - Testing the solution against the submission

**Basic Setup:**

- `package.json`
  - Depend on workshopper modules
  - Add a main and bin named after your workshopper
    - Make the bin executable
    - This creates the command you run when installed globally e.g. `learnyounode`
- Setup the workshopper inside your main file e.g. `learnyounode.js`
  - Configure `workshopper-adventure` with options
    - Use default sections provided by `workshopper-adventure`
  - List all of your exercises
    - See `workshopper-adventure/util#idFromName` for name conversion → [github.com/workshopper/workshopper-adventure/blob/master/util.js](https://github.com/workshopper/workshopper-adventure/blob/master/util.js)
  - Execute the workshopper inside the bin file
- Add a language mapping in the `i18n` directory with a catchy `title` for your workshopper
- Define each exercise in the `exercises` directory

**Exercise Structure:**

- A basic exercise contains the following
  - A `problem.md` file that describes the exercise
    - Any instance of `{appname}` will be replaced with your workshopper bin name
  - An `exercise.js` file that sets up the exercise
  - A `solution/solution.js` file that is ran against the submission

**Examples:**

- Basic stdout comparison: “hello world” → [github.com/workshopper/learnyounode/tree/master/exercises/hello_world](https://github.com/workshopper/learnyounode/tree/master/exercises/hello_world)
- Setup arguments: “baby steps” → [github.com/workshopper/learnyounode/tree/master/exercises/baby_steps](https://github.com/workshopper/learnyounode/tree/master/exercises/baby_steps)
- Setup and cleanup: “http client” → [github.com/workshopper/learnyounode/blob/master/exercises/http_client](https://github.com/workshopper/learnyounode/blob/master/exercises/http_client)
- Wraps node module with `wrappedexec`: “my first io” → [github.com/workshopper/learnyounode/blob/master/exercises/my_first_io](https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_io)
