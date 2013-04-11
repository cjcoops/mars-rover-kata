"use strict";
var _ = require('underscore');

function Obstacle(x, y) {
  this.x = undefined;
  this.y = undefined;

  this.setX(x);
  this.setY(y);
}

Obstacle.prototype.setX = function(x) {
  if(!_.isNumber(x)) throw new Error('invalid x coordinate');
  this.x = x;
}

Obstacle.prototype.setY = function(y) {
  if(!_.isNumber(y)) throw new Error('invalid y coordinate');
  this.y = y;
}

module.exports = Obstacle;