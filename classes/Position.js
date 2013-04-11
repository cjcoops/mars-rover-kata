"use strict";
var _ = require('underscore');
var DIRECTIONS = require('./Directions.js');

function Position(x, y, direction) {
  this.x = undefined;
  this.y = undefined;
  this.direction = undefined;

  this.setX(x);
  this.setY(y);
  this.setDirection(direction);
}

Position.prototype.setX = function(x) {
  if(!_.isNumber(x)) throw new Error('invalid x coordinate');
  this.x = x;
}
Position.prototype.addX = function(x) {
  if(!_.isNumber(x)) throw new Error('invalid value');
  this.x = this.x + x;
}
Position.prototype.setY = function(y) {
  if(!_.isNumber(y)) throw new Error('invalid y coordinate');
  this.y = y;
}
Position.prototype.addY = function(y) {
  if(!_.isNumber(y)) throw new Error('invalid value');
  this.y = this.y + y;
}

Position.prototype.setDirection = function(direction) {
  if(!direction || !~DIRECTIONS.indexOf(direction)) 
    throw new Error('missing or invalid direction (' + DIRECTIONS.join('|') + ')');
  this.direction = direction;
}

module.exports = Position;