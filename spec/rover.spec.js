"use strict";
var Rover = require('../classes/Rover.js');
var Position = require('../classes/Position.js');


describe('Rover', function(){

  describe('starting position', function(){
    it('should start at (x,y|0,0) facing north (per default)', function(){
      var rover = new Rover();
      var startPosition = rover.getPosition();
      expect(startPosition.x).toEqual(0);
      expect(startPosition.y).toEqual(0);
      expect(startPosition.direction).toEqual('north');
    });

    it('should start at (x,y|1,2) facing south (per argument)', function(){
      var rover = new Rover({start: new Position(1, 2, 'south')});
      var startPosition = rover.getPosition();
      expect(startPosition.x).toEqual(1);
      expect(startPosition.y).toEqual(2);
      expect(startPosition.direction).toEqual('south');
    });

  });

  describe('should turn', function(){
    it('left', function(){
      var rover = new Rover();
      rover.move('l'); // turn left
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });

    it('right', function(){
      var rover = new Rover();
      rover.move('r'); // turn right
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('east');
    });
  });


  describe('moves 1 tick', function(){

    it('forward (facing north, on y-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'north')});
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(1);
      expect(position.direction).toEqual('north');
    });
    it('backward (facing north, on y-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'north')});
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(-1);
      expect(position.direction).toEqual('north');
    });

    it('forward (facing south, on y-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'south')});
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(-1);
      expect(position.direction).toEqual('south');
    });
    it('backward (facing south, on y-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'south')});
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(1);
      expect(position.direction).toEqual('south');
    });


    it('forward (facing east, on x-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'east')});
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('east');
    });
    it('backward (facing east, on x-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'east')});
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(-1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('east');
    });

    it('forward (facing west, on x-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'west')});
      rover.move('f'); // move forward
      var position = rover.getPosition();
      expect(position.x).toEqual(-1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });
    it('backward (facing west, on x-axis)', function(){
      var rover = new Rover({start: new Position(0, 0, 'west')});
      rover.move('b'); // move backward
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });

  });

  describe('drives', function(){
    it('a loop (frfrfrf)', function(){
      var rover = new Rover();
      rover.move('frfrfrf');
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(0);
      expect(position.direction).toEqual('west');
    });

    it('another loop (blfrfrfl) starting at 1,2 facing east', function(){
      var rover = new Rover({start: new Position(1, 2, 'east')});
      rover.move('blfrfrfl');
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(2);
      expect(position.direction).toEqual('east');
    });
  });



})
