'use strict';
var _ = require('underscore');
var helper = require('../helpers.js');

var Position = require('./Position.js');
var Map = require('./Map.js');
var DIRECTIONS = require('./Directions.js');


function Rover(options) {
  var defaults = {
    start: new Position(0, 0, 'north'), // default position // @todo within map boundaries?
    map: undefined // map with boundaries and obstacles
  };

  if (!options) options = {};
  options = _.defaults(options, defaults);

  this.pathStack = [];
  this.addPosition(options.start);

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

// move rover according to commandString f|b|l|r
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



Rover.prototype._move = function(direction) {
  // direction =  1 = forward
  // direction = -1 = backward

  var position = this.getPosition().clone();
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

    var _mapCollideWithObstacle = function(position, map) {
      for (var i = 0; i < map.obstacles.length; i++) {
        var obstacle = map.obstacles[i];
        if (position.x == obstacle.x && position.y == obstacle.y) {
          return true;
        }
      }
      return false;
    };
    if (_mapCollideWithObstacle(position, this.map)) return false; // obstacle collision?
  }
  this.addPosition(position);
  return true;
};


Rover.prototype._turn = function(direction) {
  // direction =  1 = right
  // direction = -1 = left
  var position = this.getPosition();
  position.setDirection(helper.returnFromInfiniteArray(DIRECTIONS, position.direction, 1 * direction));
  this.addPosition(position);
};


module.exports = Rover;
