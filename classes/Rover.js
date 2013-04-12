'use strict';

// include some common libs
var _ = require('underscore');
var helper = require('../helpers.js');

// include required classes
var Position = require('./Position.js');
var Map = require('./Map.js');
var DIRECTIONS = require('./Directions.js');

// ## Rover class definition
function Rover(options) {
  var defaults = {

    // assign default starting position  
    // @todo within map boundaries?
    start: new Position(0, 0, 'north'), 

    // assign map instance undefined
    map: undefined 
  };

  // overwrite defaults with values given from options object
  if (!options) options = {};
  options = _.defaults(options, defaults);

  // init pathStack and add startint position as first path item
  this.pathStack = [];
  this.addPosition(options.start);

  // if there is a map available, we should use it
  // for boundaries and obstacles checks
  if (options.map) this.setMap(options.map);
}

// set map aka data for navigation system
Rover.prototype.setMap = function(map) {
  if (!map instanceof Map) throw new Error('invalid map');
  this.map = map;
  return true;
};

// get last Position of rover
Rover.prototype.getPosition = function(index) {
  if (!index) index = 0;
  if (this.pathStack.length === 0) return false;
  return this.pathStack[this.pathStack.length - index - 1];
};

// add new Position to rover path
Rover.prototype.addPosition = function(position) {
  if (!position instanceof Position) throw new Error('invalid position');
  this.pathStack.push(position);
  return true;
};

// move rover according to commandString `f|b|l|r
Rover.prototype.move = function(commandString) {
  if (!_.isString(commandString)) throw new Error('invalid command string');
  var commands = commandString.split('');
  if (commands.length === 0) return true; // everything is fine

  // iterate over every single command
  for (var i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'f':
        if (!this.moveForward()) return false;
        break;
      case 'b':
        if (!this.moveBackward()) return false;
        break;
      case 'l': this.turnLeft(); break;
      case 'r': this.turnRight(); break;
    }
  }
  return true;
};


// move rover forward and save new position
// consider direction, map boundaries and map obstacles
Rover.prototype.moveForward = function() {
  return this._move(1);
};

// move rover backward and save new position
// consider direction, map boundaries and map obstacles
Rover.prototype.moveBackward = function() {
  return this._move(-1);
};

// turn rover left and save new position
Rover.prototype.turnLeft = function() {
  this._turn(-1);
};

// turn rover right and save new position
Rover.prototype.turnRight = function() {
  this._turn(1);
};


// do the actual work when moving the rover  
// `direction =  1 = forward`  
// `direction = -1 = backward`
Rover.prototype._move = function(direction) {

  // get last Position and clone a new Position
  var position = this.getPosition().clone();

  // move the rover according to its direction it is facing
  switch (position.direction) {
    case 'north': position.addY(1 * direction); break;
    case 'south': position.addY(-1 * direction); break;
    case 'west': position.addX(-1 * direction); break;
    case 'east': position.addX(1 * direction); break;
  }

  // if map is present ...
  if (this.map) {
    // moves within map boundaries only  
    // make sure rover stays within boundaries of map
    var _mapWrapper = function(position, map) {
      if (position.x > map.width) {
        position.setX(-map.width);
      } else if (position.x < -map.width) {
        position.setX(map.width);
      } else if (position.y > map.height) {
        position.setY(-map.height);
      } else if (position.y < -map.height) {
        position.setY(map.height);
      }
    };
    _mapWrapper(position, this.map);

    // internal method to detect collisions with obstacles 
    var _mapCollideWithObstacle = function(position, map) {
      for (var i = 0; i < map.obstacles.length; i++) {
        var obstacle = map.obstacles[i];
        if (position.x == obstacle.x && position.y == obstacle.y) {
          return true;
        }
      }
      return false;
    };
    // obstacle collision?
    // @todo report obstacle collision? currently it returns false. 
    // maybe one could implement an EventListener
    if (_mapCollideWithObstacle(position, this.map)) return false; 
  }

  // okay, finally add the new (cloned) Position to the pathStack
  this.addPosition(position);
  return true;
};

// do the actual work when turning the rover  
// `direction =  1 = right`  
// `direction = -1 = left`
Rover.prototype._turn = function(direction) {

  // get last Position and clone a new Position
  var position = this.getPosition();

  // update direction, making DIRECTIONS array virtual infinite. 
  position.setDirection(helper.returnFromInfiniteArray(DIRECTIONS, position.direction, 1 * direction));

  // okay, finally add the new (cloned) Position to the pathStack
  this.addPosition(position);
  return true;
};


module.exports = Rover;
