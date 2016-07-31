
//Starts a new game with width and height as units of Pixels
function Game(width, height) {
  this.width = width;
  this.height = height;
  this.level = 1;

  // Set up the board
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas");
  document.body.appendChild(canvas);
  this.board = new Board(canvas, width, height);

  // assign the player a random position
  this.snake = new Snake(this.randomPosition());

  // assign the food a random position
  this.foodLocation = this.randomPosition();
}

// User input is the user's most recent keystroke
Game.prototype.update = function(lastDirection) {
  var isGrowing = false;

  var nextPixel = this.snake.getNextPixel(lastDirection);


  if (nextPixel.y === this.height ||
      nextPixel.y === -1 ||
      nextPixel.x === this.width ||
      nextPixel.x === -1) {
        return true;
      }


  if (this.snake.getNextPixel(lastDirection).equals(this.foodLocation)) {
    console.warn("**hit a food source!!!");
    isGrowing = true;

    this.foodLocation = this.randomPosition();
    console.warn("**new location for food: ", this.foodLocation);

    this.level++;
    console.warn("**new level: ", this.level);

  }
  // move the snake in the appropriate direction
  this.snake.move(lastDirection, isGrowing);



  // check if the snake has collided with a wall

  // check if the snake has collided with food

  console.log("**new snake: ", this.snake);

  // refresh the Board
  this.board.redraw(this.snake, this.foodLocation);

  return false;
}


Game.prototype.randomPosition = function() {
  return new Pixel(Math.floor(Math.random()*this.width),
                   Math.floor(Math.random()*this.height));
}
