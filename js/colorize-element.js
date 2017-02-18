'use strict';

window.colorizeElement = (function () {

  return function (element, colors, property) {

    element.addEventListener('click', function () {
      var computedStyle = getComputedStyle(element);
      var currentColorOfElement = computedStyle[property];
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
    });

    element.addEventListener('keydown', function (evt) {
      var computedStyle = getComputedStyle(element);
      var currentColorOfElement = computedStyle[property];
      if (window.utils.isActivateEvent(evt)) {
        element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
      }
    });
  };
})();
