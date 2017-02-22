'use strict';

window.colorizeElement = (function () {

  return function (element, colors, callback) {

    var currentColor = colors[0];

    var changeColorHandler = function () {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
    };

    element.addEventListener('click', changeColorHandler);

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        changeColorHandler();
      }
    });
  };

})();
