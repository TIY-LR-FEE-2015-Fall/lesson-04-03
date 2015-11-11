(function() {
  var btn = $('button');
  var list = $('ul').find('li:first-of-type');

  btn.on('click', function() {
    list.fadeToggle(2000);
  });
})();
