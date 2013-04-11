"use strict";
var _ = require('underscore');

var DIRECTIONS = ['north', 'east', 'south', 'west'];

function Position(x, y, direction) {
  if(!_.isNumber(x)) throw new Error('missing x coordinate');
  if(!_.isNumber(y)) throw new Error('missing y coordinate');
  if(!direction || !~DIRECTIONS.indexOf(direction)) 
    throw new Error('missing or invalid direction (' + DIRECTIONS.join('|') + ')');

  this.x = x;
  this.y = y;
  this.direction = direction;
}

module.exports = Position;