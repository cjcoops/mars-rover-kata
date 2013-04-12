'use strict';

// include some common libs
var _ = require('underscore');

// ## Obstacle class definition
function Obstacle(x, y) {
  this.x = undefined;
  this.y = undefined;

  this.setX(x);
  this.setY(y);
}

// setter for x coordinate
Obstacle.prototype.setX = function(x) {
  if (!_.isNumber(x)) throw new Error('invalid x coordinate');
  this.x = x;
};

// setter for y coordinate
Obstacle.prototype.setY = function(y) {
  if (!_.isNumber(y)) throw new Error('invalid y coordinate');
  this.y = y;
};

module.exports = Obstacle;
