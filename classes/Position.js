"use strict";
var _ = require('underscore');
var DIRECTIONS = require('./Directions.js');

function Position(x, y, direction) {
  if(!_.isNumber(x)) throw new Error('missing x coordinate');
  if(!_.isNumber(y)) throw new Error('missing y coordinate');
  if(!direction || !~DIRECTIONS.indexOf(direction)) 
    throw new Error('missing or invalid direction (' + DIRECTIONS.join('|') + ')');

  this.setX(x);
  this.setY(y);
  this.setDirection(direction);
}

Position.prototype.setX = function(x) {
  this.x = x;
}

Position.prototype.setY = function(y) {
  this.y = y;
}

Position.prototype.setDirection = function(direction) {
  this.direction = direction;

  if(~['north', 'south'].indexOf(direction)) {
    this.axis = 'y';
  } else if(~['west', 'east'].indexOf(direction)) {
    this.axis = 'x';
  }
}

module.exports = Position;