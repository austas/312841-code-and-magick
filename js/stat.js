'use strict';

var window = {
  renderStatistics: function (ctx, names, times) {
    var canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

  }
};
