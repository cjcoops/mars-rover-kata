"use strict";

function Rover() {
  this.pathStack = []; 
}

Rover.prototype.move = function() {
  return true;
}

module.exports = Rover;