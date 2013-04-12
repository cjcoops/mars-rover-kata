mars-rover-kata
===============

[Mars Rover Kata](http://craftsmanship.sv.cmu.edu/katas/mars-rover-kata) with [Node.js](http://nodejs.org)  

 * Develop an api that moves a rover around on a grid.
 * You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
 * The rover receives a character array of commands.
 * Implement commands that move the rover forward/backward (f,b).
 * Implement commands that turn the rover left/right (l,r).
 * Implement wrapping from one edge of the grid to another. (planets are spheres after all)
 * Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.
 * Example: The rover is on a 100x100 grid at location (0, 0) and facing NORTH. The rover is given the commands "ffrff" and should end up at (2, 2)
 * Tips: use multiple classes and TDD


## Installation
    git clone https://github.com/mattes/mars-rover-kata.git
    cd mars-rover-kata
    npm install
    
## Usage
```
rake api       # run api with example input
rake api_help  # see api help
rake autotest  # run tests automatically
rake default   # see usage
rake gui       # play the rover game
rake test      # run tests

node api.js command
```

## Example Output
```
node api.js \
  --map-width 100 \
  --map-height 100 \
  --rover-x 1 \
  --rover-y 2 \
  --rover-direction south \
  --obstacles "1,2; 3,4; 5,6" \
  ffrfflfflbb'

Map size:     100x100
Obstacles:    [ { x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 } ]
Command:      ffrfflfflbb
Rover start:  { x: 1, y: 2, direction: 'south' }
Rover end:    { x: -3, y: -2, direction: 'east' }
Rover Path:
[ { x: 1, y: 2, direction: 'south' },
  { x: 1, y: 1, direction: 'south' },
  { x: 1, y: 0, direction: 'west' },
  { x: 1, y: 0, direction: 'west' },
  { x: 0, y: 0, direction: 'west' },
  { x: -1, y: 0, direction: 'south' },
  { x: -1, y: 0, direction: 'south' },
  { x: -1, y: -1, direction: 'south' },
  { x: -1, y: -2, direction: 'east' },
  { x: -1, y: -2, direction: 'east' },
  { x: -2, y: -2, direction: 'east' },
  { x: -3, y: -2, direction: 'east' } ]
``` 


## Rover Gui fun
```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        
        
            ▓          ▓ 
            
        →→→→→→→→↓   →→→→→→→↓                        
        ↑       ↓   ↑      ↓                
        ↑       ↓   ↑      ↓             
        ↑       →→→→↑      ↓                     
        ↑                  ↓                        
        ↑                  ↓             
        ↑←←←←←←←←←←←
                                                      
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
{ x: -1, y: 0, direction: 'east' }
f=forward, b=backward, r=right, l=left, n=new, q=quit
```
