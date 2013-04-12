var Position = require('./classes/Position.js');
var Rover = require('./classes/Rover.js');
var Map = require('./classes/Map.js');
var Obstacle = require('./classes/Obstacle.js');


var program = require('commander');

program
  .usage('[options] command')
  .option('-mw, --map-width [map-height]', 'Set map width')
  .option('-mh, --map-height [map-width]', 'Set map height')
  .option('-rx, --rover-x [rover-x]', 'Set rover starting x coordinate')
  .option('-ry, --rover-y [rover-y]', 'Set rover starting y coordinate')
  .option('-rd, --rover-direction [roverDirection]', 'Set rover starting direction [north|east|south|west]')
  .option('-mo, --obstacles <obstacles>', 'Add obstacles to map x,y[; ...], i.e. "1,3; 5,6"', function(val) { return val.split(';'); })
  .parse(process.argv);


var commandString = program['args'][0] || '';
var mapHeight = +program['mapHeight'];
var mapWidth = +program['mapWidth'];
var roverX = +program['roverX'] || 0;
var roverY = +program['roverY'] || 0;
var roverDirection = program['roverDirection'] || 'north';
var obstacles = program['obstacles'] || [];



// validate map size
if(!mapHeight > 0 && !mapWidth > 0) mapHeight = 100;
mapHeight = mapHeight ? mapHeight : mapWidth;
mapWidth = mapWidth ? mapWidth : mapHeight;

// create map
var map = new Map(mapWidth, mapHeight);

// add obstacles to map
if(obstacles.length > 0) {
  for(var i=0; i < obstacles.length; i++) {
    var obstacle = obstacles[i].split(',');
    if(obstacle.length === 2)
      map.addObstacle(new Obstacle(+obstacle[0], +obstacle[1])); 
  }
}

// create rover ...
var rover = new Rover({start: new Position(roverX, roverY, roverDirection), map: map});
var startPosition = rover.getPosition();

// print output
console.log('Map size:    ', map.width + 'x' + map.height);
console.log('Obstacles:   ', map.obstacles);
console.log('Command:     ', commandString);
console.log('Rover start: ', startPosition);

// ... and move it
rover.move(commandString);
var endPosition = rover.getPosition();

console.log('Rover end:   ', endPosition);
console.log('Rover Path:');
console.log(rover.pathStack);

