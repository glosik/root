// Brocfile.js
const funnel = require("broccoli-funnel");
const merge = require("broccoli-merge-trees");
const compileSass = require('broccoli-sass-source-maps')(require('sass'));
const Rollup = require("broccoli-rollup");
const babel = require("rollup-plugin-babel");

const appRoot = "app-broc";

// Copy HTML file from app root to destination
const html = funnel(appRoot, {
  files: ["index.html"],
  annotation: "Index file",
});

// Compile JS through rollup
let js = new Rollup(appRoot, {
  inputFiles: ["**/*.js"],
  annotation: "JS Transformation",
  rollup: {
    input: "app.js",
    output: {
      file: "assets/app.js",
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      })
    ],
  }
});

// Copy JS file into assets
//let js = funnel(appRoot, {
//  files: ["app.js"],
//  destDir: "/assets",
//  annotation: "JS files",
//});

// Transpile JS files to ES5
//js = babel(js, {
//  browserPolyfill: true,
//  sourceMap: 'inline',
//});

// Copy CSS file into assets
//const css = funnel(appRoot, {
//  srcDir: "styles",
//  files: ["app.css"],
//  destDir: "/assets",
//  annotation: "CSS files",
//});

// Copy images into assets
const images = funnel(appRoot, {
  srcDir: "images",
  destDir: "/images",
  annotation: "Images",
});

// Compile sass files
const css = compileSass(
  [appRoot],
  "styles/app.scss",
  "assets/app.css",
  {
    sourceMap: true,
    sourceMapContents: false,
    annotation: "Sass files"
  }
);

// Copy public files into destination
//const public = funnel('public', {
//  annotation: "Public files",
//});

module.exports = merge([html, js, css, images], {annotation: "Final output"});
