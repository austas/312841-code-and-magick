'use strict';

window.colorizeElement = (function () {

  return function (element, colors, currentColorOfElement, callback) {

    var changeColor = function () {
      callback(element, window.utils.getRandomElementExcept(colors, currentColorOfElement));
    };

    element.addEventListener('click', changeColor);

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        changeColor();
      }
    });
  };

})();
