"use strict";
var _ = require('underscore');
var Position = require('./Position.js');

function Rover(options) {
  var defaults = {
    start: new Position(0, 0, 'north') // default position
  };

  if(!options) options = {};
  options = _.defaults(options, defaults);

  this.pathStack = [];
  this.pathStack.push(options.start); 
}

Rover.prototype.getPosition = function() {
  if(this.pathStack.length === 0) return false;
  return this.pathStack[this.pathStack.length-1];
}

Rover.prototype.move = function() {
  return true;
}

module.exports = Rover;