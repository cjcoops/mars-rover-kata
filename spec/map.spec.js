"use strict";
var Map = require('../classes/Map.js');
var Obstacle = require('../classes/Obstacle.js');
var _ = require('underscore');

describe('Map', function(){

  it('has some size', function(){
    var map = new Map(1, 2);
    expect(map.width).toEqual(1);
    expect(map.height).toEqual(2);
  });

  it('obstacle is within map boundaries', function(){
    var map = new Map(10, 10);
    expect(function(){
      map.addObstacle(new Obstacle(11, 1));
    }).toThrow();

    expect(function(){
      map.addObstacle(new Obstacle(1, 11));
    }).toThrow(); 
  });

  it('has some obstacles', function(){
    var map = new Map(10, 10);
    map.addObstacle(new Obstacle(1, 2));
    map.addObstacle(new Obstacle(3, 4));
    expect(map.obstacles.length).toEqual(2);
  });

})