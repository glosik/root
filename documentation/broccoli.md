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
* npm i -D rollup@^0.66.2 broccoli-rollup@^2.1.1 rollup-plugin-babel@^4.0.3
* yarn remove broccoli-babel-transpiler @babel/preset-env
`Rollup is a next-generation JavaScript module bundler. Author your app or library using ES2015 modules, then efficiently bundle them up into a single file for use in browsers and Node.js`
* npm i -D rollup-plugin-node-resolve@^3.4.0 rollup-plugin-commonjs@^9.1.8
`Rollup only knows about your code by default, it has no idea about node_modules code or how to resolve it. As such we must configure it to know how to resolve node modules you might import.`
* npm i -D broccoli-livereload@^1.3.0
* npm i -D broccoli-stew@^2.0.0
`debug`
* npm i -D broccoli-lint-eslint@^3.3.2 broccoli-sass-lint@^1.1.2
* npm i -D broccoli-env@^0.0.1
`Environment configuration allows us to include or not include certain things in the build given certain configuration options.`
* npm i -D rollup-plugin-uglify@^3.0.0 broccoli-clean-css@^2.0.1
`Minifying or Uglifying as it's also sometimes called, is the process of turning normal Javascript or CSS, into a compressed version, with much shorter variable and function names (for JS), and unnecessary whitespace removed to save on bytes shipped to the browser.`
* npm i -D broccoli-asset-rev@^2.7.0
`When deploying updates to your new shiny app, you're going to want the browser to fetch the latest version if there has been an update, rather than using the cached version the browser may store. The simplest way we can do this is by appending a content hash to the filename, to ensure that when you push a new update, a new hash will be created, thus invalidating the previous cached versions.`
