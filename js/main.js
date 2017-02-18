'use strict';

(function () {
  var setupOpenIcon = document.querySelector('.setup-open-icon');

  var focusOpenButton = function () {
    setupOpenIcon.focus();
  };

  var onSetupKeydown = function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      window.enableSetup(focusOpenButton);
    }
  };

  setupOpenIcon.addEventListener('keydown', onSetupKeydown);

})();
