'use strict';

window.utils = (function () {
  return {
    getRandomElement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },

    getRandomElementExcept: function (array, currentElement) {
      var newElement = null;
      while (!newElement || newElement === currentElement) {
        newElement = window.utils.getRandomElement(array);
      }
      return newElement;
    }
  };
})();
