"use strict";
var Rover = require('../classes/Rover.js');


describe('Rover', function(){

  var rover = new Rover();

  it('should return foobar', function(){
    // @todo just a test ...
    expect(rover.move()).toEqual(true);
  });
})