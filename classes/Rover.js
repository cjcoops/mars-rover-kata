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

// get last Position of rover
Rover.prototype.getPosition = function(index) {
  if(!index) index = 0;
  if(this.pathStack.length === 0) return false;
  return this.pathStack[this.pathStack.length - index - 1];
}

// move rover
Rover.prototype.move = function(commandString) {
  return true;
}

module.exports = Rover;