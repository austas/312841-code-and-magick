'use strict';

window.colorizeElement = (function () {

  return function (element, colors, property, callback) {

    var changeColor = function () {
      var currentColorOfElement = element.style[property];
      var newColor = window.utils.getRandomElementExcept(colors, currentColorOfElement);
      callback(element, newColor);
    };

    element.addEventListener('click', changeColor);

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        changeColor();
      }
    });
  };

})();
