"use strict";
var Map = require('../classes/Map.js');
var Rover = require('../classes/Rover.js');
var Obstacle = require('../classes/Obstacle.js');

describe('Rover on Map', function(){

  describe('moves FORWARD from one edge of the map to the other', function(){

    it('from west to east', function(){
      var rover = new Rover({start: new Position(0, 0, 'east'), map: new Map(3, 3)}).move('ff');
      var position = rover.getPosition();
      expect(position.x).toEqual(-1);
      expect(position.y).toEqual(0);
    });

    it('from east to west', function(){
      var rover = new Rover({start: new Position(0, 0, 'west'), map: new Map(3, 3)}).move('ff');
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(0);  
    });

    it('from north to south', function(){
      var rover = new Rover({start: new Position(0, 0, 'south'), map: new Map(3, 3)}).move('ff');
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(1);   
    });

    it('from south to north', function(){
      var rover = new Rover({start: new Position(0, 0, 'north'), map: new Map(3, 3)}).move('ff');
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(-1);   
    });

  });

  describe('moves BACKWARD from one edge of the map to the other', function(){

    it('from east to west', function(){
      var rover = new Rover({start: new Position(0, 0, 'east'), map: new Map(3, 3)}).move('bb');
      var position = rover.getPosition();
      expect(position.x).toEqual(1);
      expect(position.y).toEqual(0);
    });

    it('from west to east', function(){
      var rover = new Rover({start: new Position(0, 0, 'west'), map: new Map(3, 3)}).move('bb');
      var position = rover.getPosition();
      expect(position.x).toEqual(-1);
      expect(position.y).toEqual(0);  
    });

    it('from south to north', function(){
      var rover = new Rover({start: new Position(0, 0, 'south'), map: new Map(3, 3)}).move('bb');
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(-1);   
    });

    it('from north to south', function(){
      var rover = new Rover({start: new Position(0, 0, 'north'), map: new Map(3, 3)}).move('bb');
      var position = rover.getPosition();
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(1);   
    });

  });

  describe('colides with obstacles', function(){
    var map = new Map(5, 5);
    map.addObstacle(new obstacles(1, 1));

    var rover = new Rover();
    rover.addMap(map);

    it('from west to east', function(){
      expect(false).toBe(true);    
    });

    it('from east to west', function(){
      expect(false).toBe(true);    
    });

    it('from north to south', function(){
      expect(false).toBe(true);    
    });

    it('from south to north', function(){
      expect(false).toBe(true);    
    });

  });

});