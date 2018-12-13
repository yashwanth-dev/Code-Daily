#Source:
https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

#problem with adding multiple js files:
1. If the JS files are linked, then if the other js file does not load due to some server issue, app breaks.

require problem in browser vs node
Node - Uses file system
Browser - Needs module bundler to find all the require statements