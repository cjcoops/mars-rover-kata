'use strict';
var Position = require('../classes/Position.js');


describe('Position', function() {

  it('should handle positive values', function() {
    var position = new Position(0, 1, 'south');
    expect(position.x).toEqual(0);
    expect(position.y).toEqual(1);
    expect(position.direction).toEqual('south');
  });

  it('should handle negative values', function() {
    var position = new Position(-1, -2, 'north');
    expect(position.x).toEqual(-1);
    expect(position.y).toEqual(-2);
    expect(position.direction).toEqual('north');
  });

  it('should break on invalid x', function() {
    expect(function() {
      return new Position(null, 0, 'north');
    }).toThrow();
  });

  it('should break on invalid y', function() {
    expect(function() {
      return new Position(0, 'foo', 'north');
    }).toThrow();
  });

  it('should break on invalid direction', function() {
    expect(function() {
      return new Position(0, 0, 'foo');
    }).toThrow();
  });
});
