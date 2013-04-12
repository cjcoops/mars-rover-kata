"use strict";
var _ = require('underscore');

var Obstacle = require('./Obstacle.js');


function Map(width, height) {
  this.width = undefined;
  this.height = undefined;
  this.obstacles = [];

  // it spans a coordinate system in positive and negative direction
  this.setWidth(width); 
  this.setHeight(height);
}

Map.prototype.setWidth = function(width) {
  if(!_.isNumber(width)) throw new Error('invalid width');
  this.width = width;
}

Map.prototype.setHeight = function(height) {
  if(!_.isNumber(height)) throw new Error('invalid height');
  this.height = height;
}

Map.prototype.addObstacle = function(obstacle) {
  if(!this.width || !this.height) throw new Error('init map with width and height first');
  if(!obstacle instanceof Obstacle) throw new Error('invalid obstacle');

  if(obstacle.x > this.width || obstacle.x < -this.width)
    throw new Error('x coordinate is not within map boundaries');

  if(obstacle.y > this.height || obstacle.y < -this.height)
    throw new Error('y coordinate is not within map boundaries');

  this.obstacles.push(obstacle);
}



module.exports = Map;