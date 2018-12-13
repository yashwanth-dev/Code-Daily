#Source:
https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

#problem with adding multiple js files:
1. If the JS files are linked, then if the other js file does not load due to some server issue, app breaks.

require problem in browser vs node
Node - Uses file system
Browser - Needs module bundler to find all the require statements

#webpack
Installing: npm install webpack webpack-cli --save-dev
Running: ./node_modules/.bin/webpack index.js --mode=development
development mode keeps the JS files readable.
Production mode has minified JS file.

Package Manager - Automatically download 3rd party packages - npm
module bundler - to create one script file - webpack
transpiler - use future javascript features - babel
task runner - automate different parts of build process - webpack



