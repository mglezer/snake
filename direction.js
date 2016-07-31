const directions = {
  UP:    1,
  DOWN:  2,
  RIGHT: 3,
  LEFT:  4
};

const defaultDirection = directions.RIGHT;

function oppositeDirection(direction) {
  switch (direction) {
    case directions.UP:
      return directions.DOWN;
      break;
    case directions.DOWN:
      return directions.UP;
      break;
    case directions.LEFT:
      return directions.RIGHT;
      break;
    case directions.RIGHT:
      return directions.LEFT;
      break;
  }
}
