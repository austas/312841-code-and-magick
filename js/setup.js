'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = document.querySelector('.setup-submit');
  var onSetupClose = null;

  var setupKeydownHandler = function (evt) {
    if (window.utils.isEscEvent(evt)) {
      hideSetup();
    }
  };

  var showSetup = function () {
    setupOpen.querySelector('.setup-open-icon').setAttribute('aria-pressed', 'true');
    setup.classList.remove('invisible');
    setup.setAttribute('aria-hidden', 'false');
    setupClose.setAttribute('aria-pressed', 'false');
    setupSubmit.setAttribute('aria-pressed', 'false');
    document.addEventListener('keydown', setupKeydownHandler);
  };

  var hideSetup = function () {
    setupOpen.querySelector('.setup-open-icon').setAttribute('aria-pressed', 'false');
    setup.classList.add('invisible');
    setup.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', setupKeydownHandler);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  function setupCloseHandler() {
    setupClose.setAttribute('aria-pressed', 'true');
    hideSetup();
  }

  function setupSubmitHandler(evt) {
    hideSetup();
    setupSubmit.setAttribute('aria-pressed', 'true');
    evt.preventDefault();
  }

  setupOpen.addEventListener('click', showSetup);
  setupClose.addEventListener('click', setupCloseHandler);

  setupSubmit.addEventListener('click', setupSubmitHandler);
  setupSubmit.addEventListener('keydown', function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      setupSubmitHandler(evt);
    }
  });

  return function (cb) {
    showSetup();
    setupClose.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        setupCloseHandler();
      }
    });

    onSetupClose = cb;
  };

})();

(function () {

  var wizard = document.querySelector('#wizard');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var wizardCoat = wizard.querySelector('#wizard-coat');

  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var fireballList = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, wizardCoat.style.fill, fillElement);
  window.colorizeElement(wizardEyes, wizardEyesColors, wizardEyes.style.fill, fillElement);
  window.colorizeElement(fireball, fireballList, fireball.style.backgroundColor, changeElementBackground);

})();
