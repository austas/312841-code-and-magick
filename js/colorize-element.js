'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColorOfElement = element.style[property];

  element.addEventListener('click', function () {
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColorOfElement);
  });
};
