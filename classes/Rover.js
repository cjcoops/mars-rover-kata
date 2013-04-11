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


// move rover
Rover.prototype.move = function(commandString) {
  if(!_.isString(commandString)) throw new Error('invalid command string');
  var commands = commandString.split('');
  if(commands.length === 0) return true; // everything is fine

  // iterate over every single command
  for(var i=0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'f': this.moveForward(); break;
      case 'b': this.moveBackward(); break;
    }
  }
}

// move rover forward and save new position
Rover.prototype.moveForward = function() {
  var position = this.getPosition();
  position.y++;
  this.addPosition(position); 
}

// move rover backward and save new position
Rover.prototype.moveBackward = function() {
  var position = this.getPosition();
  position.y--;
  this.addPosition(position); 
}

module.exports = Rover;