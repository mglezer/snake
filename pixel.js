const PIXEL_WIDTH = 10;

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  this.width = PIXEL_WIDTH;
}

Pixel.prototype.equals = function(that) {
  return that.x === this.x && that.y == this.y;
}

Pixel.prototype.neighbor = function(direction) {
  switch (direction) {
    case directions.UP:
      return new Pixel(this.x, this.y - 1);
      break;

    case directions.DOWN:
      return new Pixel(this.x, this.y + 1);
      break;

    case directions.LEFT:
      return new Pixel(this.x - 1, this.y);
      break;

    case directions.RIGHT:
      return new Pixel(this.x + 1, this.y);
      break;
  }
}
