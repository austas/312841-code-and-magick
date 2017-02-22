'use strict';

window.colorizeElement = (function () {

  return function (element, colors, callback) {

    element.addEventListener('click', function () {
      var newColor = window.utils.getRandomElementExcept(colors, window.getCurrentColor(element));
      callback(element, newColor);
    });

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        var newColor = window.utils.getRandomElementExcept(colors, window.getCurrentColor(element));
        callback(element, newColor);
      }
    });
  };

})();
