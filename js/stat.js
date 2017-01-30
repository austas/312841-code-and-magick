'use strict';

window.renderStatistics = function (ctx, names, times) {

// Функция для выбора цвета в зависимости от имени игрока
  function getColor() {
    var randomColor = ['rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')'];
    return (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomColor;
  }

// Функция получения высоты диаграммы
  function getHistHeight() {
    return (150 / getMax()) * times[i];
  }

// Функция получения шага по оси х
  function getStepX(i) {
    return 155 + 90 * i;
  }

// Функция для рисования прямоугольников по заданным параметрам
  function drawRect(x1, y1, widthRect, heightRect, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, widthRect, heightRect);
  }

// Функция для рисования текста
  function drawText(message, x1, y1, color) {
    ctx.fillStyle = color || 'black';
    ctx.textBaseline = 'hanging';
    ctx.font = '16px PT Mono';
    ctx.fillText(message, x1, y1);
  }

// Функция отрисовки статистики
  function drawStat(i) {
    var histHeight = getHistHeight(i);
    var stepX = getStepX(i);
    drawRect(stepX, 245 - histHeight, 40, histHeight, getColor(names[i]));
    drawText(names[i], stepX, 255);
    drawText(parseInt(times[i], 10), stepX, 225 - histHeight);
  }

// Поиск макс. значения для определения высоты гистограммы;
  var max = -1;
  function getMax() {
    for (var i = 0; i < times.length; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }
    return max;
  }

// Рисуем подложку + тень + текст
  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(99, 9, 422, 272); // этот прямоугольник для того, чтобы создать границу, используя уже заданную функцию
  drawRect(100, 10, 420, 270, 'white');

  drawText('Ура вы победили!', 120, 30);
  drawText('Список результатов:', 120, 50);

  // Рисуем статистику игроков
  for (var i = 0; i < names.length; i++) {
    drawStat(i);
  }
};
