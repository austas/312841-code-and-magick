'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var wizard = setup.querySelector('#wizard');
var nameField = setup.querySelector('.setup-user-name');
var fireball = setup.querySelector('.setup-fireball-wrap');
var setupClose = setup.querySelector('.setup-close');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardCoat = wizard.querySelector('#wizard-coat');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupSubmit = document.querySelector('.setup-submit');

nameField.required = true;
nameField.maxLength = '50';

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

var isActivateEvent = function (e) {
  return e.keyCode && e.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (e) {
  if (e.keyCode === ESCAPE_KEY_CODE) {
    hideSetup();
  }
};

var showSetup = function () {
  setupOpenIcon.setAttribute('aria-pressed', 'true');
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetup = function () {
  setupOpenIcon.setAttribute('aria-pressed', 'false');
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

function getColor(whichColorArray) {
  var whatColor = Math.floor(Math.random() * whichColorArray.length);
  return whatColor;
}

var colorCoatIndex = 1;
function setCoatColor() {
  if (colorCoatIndex < wizardCoatColors.length) {
    wizardCoat.style.fill = wizardCoatColors[colorCoatIndex];
    colorCoatIndex++;
  } else {
    colorCoatIndex = 0;
    setCoatColor();
  }
}

function setupRole(element) {
  element.setAttribute('role', 'button');
  element.setAttribute('aria-pressed', 'false');
  element.setAttribute('tabindex', '0');
}

setupRole(setupOpenIcon);
setupRole(setupClose);

setupOpen.addEventListener('click', showSetup);
setupOpenIcon.addEventListener('keydown', function (e) {
  if (isActivateEvent(e)) {
    showSetup();
  }
});

setupClose.addEventListener('click', hideSetup);
setupClose.addEventListener('keydown', function (e) {
  if (isActivateEvent(e)) {
    hideSetup();
  }
});

setupSubmit.addEventListener('click', function (e) {
  hideSetup();
  e.preventDefault();
});
setupSubmit.addEventListener('keydown', function (e) {
  if (isActivateEvent(e)) {
    hideSetup();
    e.preventDefault();
  }
});

wizardCoat.addEventListener('click', setCoatColor);

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[getColor(wizardEyesColors)];
});

fireball.addEventListener('click', function () {
  fireball.style.background = fireballList[getColor(fireballList)];
});
