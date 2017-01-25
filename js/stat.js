'use strict'

var window = {
  renderStatistics: function(ctx, names, times) {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

  };
};
