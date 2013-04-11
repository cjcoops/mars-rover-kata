"use strict";
var Rover = require('../classes/Rover.js');
var Position = require('../classes/Position.js');


describe('Rover', function(){

  it('should start at position 0,0 facing north (per default)', function(){
    var rover = new Rover();
    var startPosition = rover.getPosition();
    expect(startPosition.x).toEqual(0);
    expect(startPosition.y).toEqual(0);
    expect(startPosition.direction).toEqual('north');
  });

  it('should start at position 1,2 facing south (per argument)', function(){
    var rover = new Rover({start: new Position(1, 2, 'south')});
    var startPosition = rover.getPosition();
    expect(startPosition.x).toEqual(1);
    expect(startPosition.y).toEqual(2);
    expect(startPosition.direction).toEqual('south');
  });

})
