"use strict";
var Obstacle = require('../classes/Obstacle.js');

describe('Obstacle', function(){

  it('should have some coordinates', function(){
    var obstacle = new Obstacle(1, 2);
    expect(obstacle.x).toEqual(1);
    expect(obstacle.y).toEqual(2);
  });

})

