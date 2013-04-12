'use strict';

// include some common libs
var _ = require('underscore');

// include required classes
var Obstacle = require('./Obstacle.js');

// ## Map class definition
function Map(width, height) {
  this.width = undefined;
  this.height = undefined;
  this.obstacles = [];

  // it spans a coordinate system into positive and negative direction
  this.setWidth(width);
  this.setHeight(height);
}

// setter for width
Map.prototype.setWidth = function(width) {
  if (!_.isNumber(width)) throw new Error('invalid width');
  this.width = width;
};

// setter for height
Map.prototype.setHeight = function(height) {
  if (!_.isNumber(height)) throw new Error('invalid height');
  this.height = height;
};

// add obstacle and perform some checks
// like if the obstacle coordinates are within the
// map boundaries
Map.prototype.addObstacle = function(obstacle) {
  if (!this.width || !this.height) throw new Error('init map with width and height first');
  if (!obstacle instanceof Obstacle) throw new Error('invalid obstacle');

  if (obstacle.x > this.width || obstacle.x < -this.width)
    throw new Error('x coordinate is not within map boundaries');

  if (obstacle.y > this.height || obstacle.y < -this.height)
    throw new Error('y coordinate is not within map boundaries');

  this.obstacles.push(obstacle);
};


module.exports = Map;
