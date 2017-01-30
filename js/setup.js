'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

function letSetupOpenClose() {
  if (setup.classList.contains('invisible')) {
    setup.classList.remove('invisible');
  } else {
    setup.classList.add('invisible');
  }
}

setupOpen.addEventListener('click', letSetupOpenClose);
setupClose.addEventListener('click', letSetupOpenClose);

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var colorCoatIndex = 1;
var getColorCoatIndex = function () {
  if (colorCoatIndex < wizardCoatColors.length) {
    wizardCoat.style.fill = wizardCoatColors[colorCoatIndex];
    colorCoatIndex++;
  } else {
    colorCoatIndex = 0;
    getColorCoatIndex();
  }
};

wizardCoat.addEventListener('click', getColorCoatIndex);

var nameField = setup.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxLength = '50';

var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  var eyesColor = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
  wizardEyes.style.fill = eyesColor;
});

var fireball = document.querySelector('.setup-fireball-wrap');
var fireballList = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

fireball.addEventListener('click', function () {
  var fireballColor = fireballList[Math.floor(Math.random() * wizardEyesColors.length)];
  fireball.style.background = fireballColor;
});
