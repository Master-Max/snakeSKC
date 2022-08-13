/**
 * This is the apple object. It contains all the important information for the apple.
 */
let apple = {
    // The apple's initial position (bottom right)
    x: (CANVAS_SIZE - 1) * CELL_SIZE,
    y: (CANVAS_SIZE - 1) * CELL_SIZE,

    // The apple's color
    color: 'red',

    // Is the apple golden?
    isGolden: false,
};

// Get a random integer in a specific range
function getRandomInt(min, max) {
    // Math is a library built into JavaScript. It deals with mathematics that are more complicated than adding or subtracting numbers.
    return Math.floor(Math.random() * (max - min)) + min;
}

// Places the apple at a random location on the canvas
function randomizeApple() {
    let newRand = getRandomInt(0,10);
    // console.log(newRand)
    if(newRand <= 0){
      // console.log('Golden!')
      apple.color = 'yellow';
      apple.isGolden = true;
    } else {
      // console.log('Not Golden...')
      apple.color = 'red';
      apple.isGolden = false;
    }

    apple.x = getRandomInt(0, CANVAS_SIZE) * CELL_SIZE;
    apple.y = getRandomInt(0, CANVAS_SIZE) * CELL_SIZE;
}
