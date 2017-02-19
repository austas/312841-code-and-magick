'use strict';

window.colorizeElement = (function () {

  return function (element, colors, property) {

    element.addEventListener('click', function () {
      var currentColorOfElement = element.style[property];
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
    });

    element.addEventListener('keydown', function (evt) {
      var currentColorOfElement = element.style[property];
      if (window.utils.isActivateEvent(evt)) {
        element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
      }
    });
  };
})();
