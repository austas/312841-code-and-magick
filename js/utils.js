'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

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
    },

    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },

    isEscEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
    }
  };
})();
