'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColorOfElement = element.style[property];

  element.addEventListener('click', function () {
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
  });

  element.addEventListener('keydown', function (evt) {
    if (window.isActivateEvent(evt)) {
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
    }
  });
};
