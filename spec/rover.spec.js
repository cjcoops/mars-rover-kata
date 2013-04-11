"use strict";
var Rover = require('../classes/Rover.js');
var Position = require('../classes/Position.js');


describe('Rover', function(){

  describe('starting position', function(){
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

  });

  describe('turning', function(){
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
  });


  describe('moving forward/backward on x/y-axis', function(){

    it('should move forward (facing north, on y-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'north'));
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(1);
      expect(position.direction).toEqual('north');
    });
    it('should move backward (facing north, on y-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'north'));
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(-1);
      expect(position.direction).toEqual('north');
    });

    it('should move forward (facing south, on y-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'south'));
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(-1);
      expect(position.direction).toEqual('south');
    });
    it('should move backward (facing south, on y-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'south'));
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(1);
      expect(position.direction).toEqual('south');
    });


    it('should move forward (facing east, on x-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'east'));
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('east');
    });
    it('should move backward (facing east, on x-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'east'));
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(-1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('east');
    });

    it('should move forward (facing west, on x-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'west'));
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(-1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });
    it('should move backward (facing west, on x-axis)', function(){
      var rover = new Rover(new Position(0, 0, 'west'));
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });

  });

  describe('driving', function(){
    it('should handle a more complex command string', function(){
      console.log('-------');
      var rover = new Rover();
      rover.move('ffrff');
      var position = rover.getPosition();
      expect(position.x).toEqual(2);
      expect(position.y).toEqual(2);
      expect(position.direction).toEqual('east');
    });

    it('should drive a loop (actually a even more complex command string)', function(){
      console.log('-------');
      var rover = new Rover();
      rover.move('frfrfrf');
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });
  });



})
