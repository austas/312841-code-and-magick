'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var wizard = setup.querySelector('#wizard');
var nameField = setup.querySelector('.setup-user-name');
var fireball = setup.querySelector('.setup-fireball-wrap');
var setupClose = setup.querySelector('.setup-close');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardCoat = wizard.querySelector('#wizard-coat');

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

function getRandom(whatElement) {
  return Math.floor(Math.random() * whatElement.length);
}

function letSetupOpenClose() {
  if (setup.classList.contains('invisible')) {
    setup.classList.remove('invisible');
  } else {
    setup.classList.add('invisible');
  }
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

function letsChangeColor() {
  if (this === wizardEyes) {
    wizardEyes.style.fill = wizardEyesColors[getRandom(wizardEyesColors)];
  } else {
    fireball.style.background = fireballList[getRandom(fireballList)];
  }
}

setupOpen.addEventListener('click', letSetupOpenClose);
setupClose.addEventListener('click', letSetupOpenClose);

wizardCoat.addEventListener('click', setCoatColor);
wizardEyes.addEventListener('click', letsChangeColor);
fireball.addEventListener('click', letsChangeColor);
