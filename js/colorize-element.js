'use strict';

window.colorizeElement = (function () {

  return function (element, colors, callback) {

    var elementProperty = window.utils.getPropertyForElement(element);
    var currentColor = element.style[elementProperty];

    element.addEventListener('click', function () {
      callback(element, window.utils.getRandomElementExcept(colors, currentColor));
    });

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        callback(element, window.utils.getRandomElementExcept(colors, currentColor));
      }
    });
  };

})();
