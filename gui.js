var keypress = require('keypress'); 
var util = require('util');
var clc = require('cli-color');

var Position = require('./classes/Position.js');
var Rover = require('./classes/Rover.js');
var Map = require('./classes/Map.js');
var Obstacle = require('./classes/Obstacle.js');


// ------------------

var map = new Map(20, 4);
map.addObstacle(new Obstacle(2, 2));
map.addObstacle(new Obstacle(2, 4));
map.addObstacle(new Obstacle(15, 2));
map.addObstacle(new Obstacle(13, 0));

var rover = new Rover({start: new Position(0, 0, 'north'), map: map});

// ------------------


var animate = function() {
  console.log(clc.reset);
  process.stdout.write(clc.moveTo(0, 0));

  var paths = {};
  for(var i=0; i < rover.pathStack.length; i++) {
    var position = rover.pathStack[i];
    paths[position.x + ',' + position.y] = position;
  }

  var obstacles = {};
  for(var i=0; i < map.obstacles.length; i++) {
    var position = map.obstacles[i];
    obstacles[position.x + ',' + position.y] = position;
  }

  for(var y=map.height+1; y >= -map.height-1; y--) {
    for(var x=-map.width-1; x <= map.width+1; x++) {

      if(x === -map.width-1 || x === map.width+1 
        || y === -map.height-1 || y === map.height+1) {
        util.print('░'); // draw border
      } 
      else if(obstacles.hasOwnProperty(x+','+y)) {
        // draw obstacles
        util.print('▓'); 
      } 
      else if(paths.hasOwnProperty(x+','+y)) {
        // draw rover path
        var position = paths[x+','+y];
        switch(position.direction) {
          case 'north': util.print('↑'); break;
          case 'south': util.print('↓'); break;
          case 'east': util.print('→'); break;
          case 'west': util.print('←'); break;
        }
      } 
      else {
        util.print(' ');    
      }
    }
    console.log(/* new line */);
  }

  console.log(rover.getPosition());
  console.log('f=forward, b=backward, r=right, l=left, n=new, q=quit');
}

animate(); // initial frame

keypress(process.stdin);
process.stdin.on('keypress', function (ch, key) {
  // new rover with new frame
  if(key.sequence == 'n')
    rover = new Rover({start: new Position(0, 0, 'north'), map: map});

  rover.move(key.sequence); // pass key to rover command string
  animate(); // draw frame

  if((key && key.ctrl && key.name == 'c') || key.sequence == 'q')
    process.stdin.pause(); // exit
});

process.stdin.setRawMode(true);
process.stdin.resume();