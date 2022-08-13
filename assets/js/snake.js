/**
 * This is the snake object. It contains all important information for the snake.
 */
let colorOptions = ['red','orange','yellow','green','lime','aquamarine','cyan','blue','magenta'];

let snake = {
    // The snake's starting position (top left)
    x: 0,
    y: 0,

    // This determines the snake's direction. Moves one grid length every frame in either the x or y direction
    dx: CELL_SIZE,
    dy: 0,

    // This is a list to keep track of each of the snake's segments
    cells: [],

    // The snake's length. This increases each time an apple is eaten
    length: 4,

    // The snake's color
    // colorIndex: 3,
    color: 'green',

};

// function getRandomInt(min, max) {
//     // Math is a library built into JavaScript. It deals with mathematics that are more complicated than adding or subtracting numbers.
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
function setNewColor() {
  // let currentColorIndex = snake.colorIndex;
  let newColorIndex = Math.floor(Math.random() * (colorOptions.length - 0)) + 0;
  console.log('currentCI: ' + currentColorIndex + '\n newCI: ' + newColorIndex)
  snake.color = colorOptions[newColorIndex];
}

function setNewColorTrueRandom() {
  let letters = '23456789ABCDEF';
  let newColor = '#';
  for (let i = 0 ; i < 3 ; i++){
    newColor += letters[Math.floor(Math.random() * 14)];
  }
  snake.color = newColor;
}

// Set the snake back to its defaul values
function resetSnake() {
    snake.x = 0;
    snake.y = 0;
    snake.cells = [];
    snake.length = 4;
    snake.dx = CELL_SIZE;
    snake.dy = 0;
    snake.color = 'green'
}
