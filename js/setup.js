'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var wizard = setup.querySelector('#wizard');
var fireball = setup.querySelector('.setup-fireball-wrap');
var setupClose = setup.querySelector('.setup-close');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardCoat = wizard.querySelector('#wizard-coat');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupSubmit = document.querySelector('.setup-submit');

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

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    hideSetup();
  }
};

var showSetup = function () {
  setupOpenIcon.setAttribute('aria-pressed', 'true');
  setup.classList.remove('invisible');
  setup.setAttribute('aria-hidden', 'false');
  setupClose.setAttribute('aria-pressed', 'false');
  setupSubmit.setAttribute('aria-pressed', 'false');
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetup = function () {
  setupOpenIcon.setAttribute('aria-pressed', 'false');
  setup.classList.add('invisible');
  setup.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', setupKeydownHandler);
};

function getColor(whichColorArray) {
  var whatColor = Math.floor(Math.random() * whichColorArray.length);
  return whatColor;
}

function setupCloseHandler() {
  setupClose.setAttribute('aria-pressed', 'true');
  hideSetup();
}

function setupSubmitHandler(evt) {
  hideSetup();
  setupSubmit.setAttribute('aria-pressed', 'true');
  evt.preventDefault();
}

var getRandomElement = function (arrayOfColors) {
  var randomColorIndex = Math.floor(Math.random() * arrayOfColors.length);
  return arrayOfColors[randomColorIndex];
};

var getRandomElementExcept = function (arrayOfColors, currentColor) {
  // var currentColor = arrayOfColors[0];
  var newColor = null;
  while (!newColor || newColor === currentColor) {
    newColor = getRandomElement(arrayOfColors);
  }
  return newColor;
};

setupOpen.addEventListener('click', showSetup);
setupOpenIcon.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    showSetup();
  }
});

setupClose.addEventListener('click', setupCloseHandler);
setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    setupCloseHandler();
  }
});

setupSubmit.addEventListener('click', setupSubmitHandler);
setupSubmit.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    setupSubmitHandler(evt);
  }
});

wizardCoat.addEventListener('click', function () {
  var currentColor = wizardCoat.style.fill;
  wizardCoat.style.fill = getRandomElementExcept(wizardCoatColors, currentColor);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElementExcept(wizardEyesColors);
});

fireball.addEventListener('click', function () {
  fireball.style.background = fireballList[getColor(fireballList)];
});
