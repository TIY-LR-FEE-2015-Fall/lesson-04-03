var Merge = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var jquery = new Funnel('bower_components/jquery/dist', {
  files: ['jquery.js'],
});

module.exports = new Merge(['public', jquery]);
