// Brocfile.js
const funnel = require("broccoli-funnel");
const merge = require("broccoli-merge-trees");
const compileSass = require('broccoli-sass-source-maps')(require('sass'));
const Rollup = require("broccoli-rollup");
const babel = require("rollup-plugin-babel");
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const LiveReload = require('broccoli-livereload');
const esLint = require("broccoli-lint-eslint");
const sassLint = require("broccoli-sass-lint");
const CleanCss = require('broccoli-clean-css');
const assetRev = require('broccoli-asset-rev');
const log = require('broccoli-stew').log;
const uglify = require('rollup-plugin-uglify');
const env = require('broccoli-env').getEnv() || 'development';
const isProduction = env === 'production';
// Status
console.log('Environment: ' + env);

const appRoot = "app-broc";

// Copy HTML file from app root to destination
const html = funnel(appRoot, {
  files: ["index.html"],
  annotation: "Index file",
});

// Lint js files
let js = esLint(appRoot, {
  persist: true
});

// Compile JS through rollup
const rollupPlugins = [
  nodeResolve({
    jsnext: true,
    browser: true,
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  babel({
    exclude: 'node_modules/**',
  }),
];

// Uglify the output for production
if (isProduction) {
  rollupPlugins.push(uglify());
}

js = new Rollup(js, {
  inputFiles: ['**/*.js'],
  rollup: {
    input: 'app.js',
    output: {
      file: 'assets/app.js',
      format: 'es',
      sourcemap: !isProduction,
    },
    plugins: rollupPlugins,
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

// Lint css files
let css = sassLint(appRoot + '/styles', {
  disableTestGenerator: true,
});

// Copy CSS file into assets
css = compileSass(
  [css],
  'app.scss',
  'assets/app.css',
  {
    sourceMap: !isProduction,
    sourceMapContents: true,
    annotation: "Sass files"
  }
);

// Compress our CSS
if (isProduction) {
  css = new CleanCss(css);
}

// Copy public files into destination
//const public = funnel('public', {
//  annotation: "Public files",
//});

//module.exports = merge([html, js, css, images], {annotation: "Final output"});

// Copy public files into destination
const public = funnel('public', {
  annotation: "Public files",
});

// Remove the existing module.exports and replace with:
let tree = merge([html, js, css, images], {annotation: "Final output"});

// Include asset hashes
if (isProduction) {
  tree = assetRev(tree);
} else {
  // Log the output tree
  tree = log(tree, {
    output: 'tree',
  });

  tree = new LiveReload(tree, {
    target: 'index.html',
  });
}

module.exports = tree;
