"use strict";
var _ = require('underscore');
var Position = require('./Position.js');
var helper = require('../helpers.js');
var DIRECTIONS = require('./Directions.js');

function Rover(options) {
  var defaults = {
    start: new Position(0, 0, 'north') // default position
  };

  if(!options) options = {};
  options = _.defaults(options, defaults);

  this.pathStack = [];
  this.addPosition(options.start); 
}

// get last Position of rover
Rover.prototype.getPosition = function(index) {
  if(!index) index = 0;
  if(this.pathStack.length === 0) return false;
  return this.pathStack[this.pathStack.length - index - 1];
}

// add new Position to rover path
Rover.prototype.addPosition = function(position) {
  this.pathStack.push(position);
  return true;
}

// move rover according to commandString f|b|l|r
Rover.prototype.move = function(commandString) {
  if(!_.isString(commandString)) throw new Error('invalid command string');
  var commands = commandString.split('');
  if(commands.length === 0) return true; // everything is fine

  // iterate over every single command
  for(var i=0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'f': this.moveForward(); break;
      case 'b': this.moveBackward(); break;
      case 'l': this.turnLeft(); break;
      case 'r': this.turnRight(); break;
    }
  }
}



// move rover forward and save new position (consider direction)
Rover.prototype.moveForward = function() {
  var position = this.getPosition();
  switch(position.direction) {
    case 'north': position.addY(1); break;
    case 'south': position.addY(-1); break;
    case 'west': position.addX(-1); break;
    case 'east': position.addX(1); break;
  }
  this.addPosition(position); 
}

// move rover backward and save new position (consider direction)
Rover.prototype.moveBackward = function() {
  var position = this.getPosition();
  switch(position.direction) {
    case 'north': position.addY(-1); break;
    case 'south': position.addY(1); break;
    case 'west': position.addX(1); break;
    case 'east': position.addX(-1); break;
  }
  this.addPosition(position); 
}

// turn rover left and save new position
Rover.prototype.turnLeft = function() {
  var position = this.getPosition();
  position.setDirection(helper.returnFromInfiniteArray(DIRECTIONS, position.direction, -1));
  this.addPosition(position); 
}

// turn rover right and save new position
Rover.prototype.turnRight = function() {
  var position = this.getPosition();
  position.setDirection(helper.returnFromInfiniteArray(DIRECTIONS, position.direction, 1));
  this.addPosition(position); 
}


module.exports = Rover;