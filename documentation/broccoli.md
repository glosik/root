[Go to tutorial](https://www.oligriffiths.com/broccolijs/01-setup.html)

`app folder : default broccoli serve from`

`dist folder : default broccoli build to`


* npm i -D  broccoli@beta broccoli-cli
`Package will appear in your devDependencies`
* npm broccoli-funnel@^2.0.1
`The funnel plugin takes an input node, and returns a new node with only a subset of the files from the input node.
The files can be moved to different paths.`
* npm i -D broccoli-merge-trees@^3.0.0
`work with multiple trees, and ultimately have them written to our target directory`

* npm i -D broccoli-sass-source-maps@^4.0.0 sass@^1.14.0
`SCSS Preprocessing `

* npm i -D @babel/core@^7.1.0 broccoli-babel-transpiler@^7.0.0 @babel/preset-env@^7.1.0
`Babel is a javascript transpiler. It will transpile (convert from one format to another), ES6 syntax javascript, to ES5 syntax javascript that is runnable in the browser. `
* yarn add --dev rollup@^0.66.2 broccoli-rollup@^2.1.1 rollup-plugin-babel@^4.0.3
* yarn remove broccoli-babel-transpiler @babel/preset-env
`Rollup is a next-generation JavaScript module bundler. Author your app or library using ES2015 modules, then efficiently bundle them up into a single file for use in browsers and Node.js`
