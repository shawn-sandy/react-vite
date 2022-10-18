# Vite template for REACT

## Introduction

<https://github.com/shawn-sandy/react-vite>

## Install

### Install from a GitHub template

Use the GitHub template feature to create a new repo using this repository as a template and push it to your GitHub account.

- Click the ["Use this template"](https://github.com/shawn-sandy/react-vite/generate) button on the repository page or [click here](https://github.com/shawn-sandy/react-vite/generate) and follow the onscreen instructions.

### Install from GitHub using `degit`

Clone the repository using degit: `npx degit shawn-sandy/packages/react-vite` or `npx degit shawn-sandy/packages/react-vite folder-name`
Open the folder that you copied the files into and run `npm init` to edit the package.json file.
Run `npm start` to start the dev server.

## Usage

### Quick start

- Browse to your install and run `npm start` to start the dev server and open it in the browser. Use this if you are building a React application for publishing to the web
- Run `npm start:package` for building npm packages/components
- Browse `/src` directory to view and edit the source code.
- Changes you make to this file should can be viewed in the browser.
- Open the terminal and run `npm test` to test your application.

### NPM script commands

- Run `npm start` to start the application and open it in the default browser.
- Run `npm run build` to build the application for production
- Run `npm run build:package` to package for `npm` use
- Run `npm test` to test your application in `--watch` mode.
- Run `npm test:ui` to run your test with Vite interactive [Vite Test UI](https://vitest.dev/guide/ui.html).
- Run `npm test:coverage` to run a test(s) with coverage output
- Run `npm test:coverage:ui` to run the Vite test UI with coverage output
- Run `npm run test:snapshot` to update the test snapshots.

### Customize your application info

Change the app name, author, and repository URL in the `package.json`

- Run `npm init` to change the values as required.

```bash

# npm interactive prompts sample example

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (react-vite)
version: (0.0.0)
entry point: (vitest.config.js)
git repository: (https://github.com/shawn-sandy/react-vite.git)
...

```

### Create a new component

- ...soon

### License

MIT License

Copyright (c) 2022 Shawn Sandy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.