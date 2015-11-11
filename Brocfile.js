var Merge = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var Babel = require('broccoli-babel-transpiler');

var jquery = new Funnel('bower_components/jquery/dist', {
  files: ['jquery.js'],
});

var scripts = Babel('src', {
  browserPolyfill: true,
  stage: 1,
  moduleIds: true,
  modules: 'amd',

  moduleRoot: 'my-app',
});

module.exports = new Merge(['public', jquery, scripts]);
