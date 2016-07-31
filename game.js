
//Starts a new game with width and height as units of Pixels
function Game(width, height) {
  this.width = width;
  this.height = height;
  this.level = 1;
  this.score = 0;

  // Set up the board
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas");
  document.body.appendChild(canvas);
  this.board = new Board(canvas, width, height);

  // assign the player a random position
  this.snake = new Snake(this.randomPosition(), defaultDirection);

  // assign the food a random position
  this.foodLocation = this.randomPosition();
}

// User input is the user's most recent keystroke
Game.prototype.update = function(lastDirection) {
  var isGrowing = false;

  var nextPixel = this.snake.getNextPixel(lastDirection);

  // check if the snake has collided with a wall
  if (nextPixel.y === this.height ||
      nextPixel.y === -1 ||
      nextPixel.x === this.width ||
      nextPixel.x === -1) {
      return true;
  }

  // check if snake has collided with itself
  if (this.snake.willTouch(nextPixel)) {
    return true;
  }

  // check if the snake has collided with food
  if (this.snake.getNextPixel(lastDirection).equals(this.foodLocation)) {
    isGrowing = true;
    this.foodLocation = this.randomPosition();
    this.score += this.level;
    this.level++;
  }

  // move the snake in the appropriate direction
  this.snake.move(lastDirection, isGrowing);

  // refresh the Board
  this.board.redraw(this.snake, this.foodLocation);

  return false;
}


Game.prototype.randomPosition = function() {
  return new Pixel(Math.floor(Math.random()*this.width),
                   Math.floor(Math.random()*this.height));
}
