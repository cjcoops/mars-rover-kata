"use strict";
var Position = require('./Position.js');

function Rover() {
  this.pathStack = []; 
}

Rover.prototype.getPosition = function() {
  if(this.pathStack.length === 0) return false;
  return this.pathStack[this.pathStack.length-1].Position;
}

Rover.prototype.move = function() {
  return true;
}

module.exports = Rover;