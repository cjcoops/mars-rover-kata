"use strict";
var Obstacle = require('./Obstacle.js');
var _ = require('underscore');

function Map(width, height) {
 this.width = undefined;
 this.height = undefined;
 this.obstacles = [];

 this.setWidth(width); // zero coordinate is then width/2
 this.setHeight(height); // zero coordinate is then height/2
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

  if(obstacle.x > this.width/2 || obstacle.x < this.width/2*-1)
    throw new Error('x coordinate is not within map boundaries 0..' + this.width);

  if(obstacle.y > this.height/2 || obstacle.y < this.height/2*-1)
    throw new Error('y coordinate is not within map boundaries 0..' + this.height);

  this.obstacles.push(obstacle);
}

module.exports = Map;