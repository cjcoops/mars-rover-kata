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

  it('should move forward', function(){
    var rover = new Rover();
    rover.move('f'); // move forward
    var position = rover.getPosition();
    expect(position.x).toEqual(0);
    expect(position.y).toEqual(1);
    expect(position.direction).toEqual('north');
  });

  it('should move backward', function(){
    var rover = new Rover();
    rover.move('b'); // move backward
    var position = rover.getPosition();
    expect(position.x).toEqual(0);
    expect(position.y).toEqual(-1);
    expect(position.direction).toEqual('north');
  });

  it('should turn left', function(){
    var rover = new Rover();
    rover.move('l'); // turn left
    var position = rover.getPosition();
    expect(position.x).toEqual(0);
    expect(position.y).toEqual(0);
    expect(position.direction).toEqual('west');
  });

  it('should turn right', function(){
    var rover = new Rover();
    rover.move('r'); // turn right
    var position = rover.getPosition();
    expect(position.x).toEqual(0);
    expect(position.y).toEqual(0);
    expect(position.direction).toEqual('east');
  });

})
