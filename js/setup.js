'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
