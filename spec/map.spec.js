"use strict";
var Map = require('../classes/Map.js');

describe('Map', function(){

  it('should be 100x100', function(){
    var map = new Map(100, 100, []);
    expect(map.width).toEqual(100);
    expect(map.height).toEqual(100);
  });

  it('has some obstacles', function(){
    expect(false).toBe(true);    
  });


})

