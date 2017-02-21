'use strict';

window.colorizeElement = (function () {

  return function (element, colors, callback) {

    var changeColor = function () {
      var currentColorOfElement = null;

      switch (element) {
        case 'wizardCoat':
        case 'wizardEyes':
          currentColorOfElement = element.style.fill;
          break;
        case 'fireball':
          currentColorOfElement = element.style.backgroundColor;
          break;
      }

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
