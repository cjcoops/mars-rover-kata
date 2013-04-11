"use strict";
var Rover = require('../classes/Rover.js');
var Position = require('../classes/Position.js');


describe('Rover', function(){

  var rover = new Rover({start: new Position(0, 0, 'north')});

  it('should start at position 0,0 facing north', function(){
    expect(rover.getPosition().x).toEqual(0);
    expect(rover.getPosition().y).toEqual(0);
    expect(rover.getPosition().direction).toEqual('north');
  });

})
