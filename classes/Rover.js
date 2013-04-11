"use strict";

var Position = require('./Position.js');

function Rover() {
  this.pathStack = []; 
}

Rover.prototype.move = function() {
  return true;
}

module.exports = Rover;