

function Snake(startPosition, startDirection) {
  this.tailLocation = startPosition;
  this.headLocation = startPosition;
  this.limbs = [ startPosition ];
  this.currentDirection = startDirection;
}

Snake.prototype.getTail = function() {
  return this.limbs[0];
}

Snake.prototype.getHead = function() {
  return this.limbs[this.limbs.length - 1];
}

Snake.prototype.getNextPixel = function(newDirection) {
  return this.getHead().neighbor(newDirection);
}

Snake.prototype.willTouch = function(pixel) {
  return this.limbs.slice(1).some(function(limb) {
    return limb.equals(pixel);
  });
}

Snake.prototype.getLimbs = function() {
  return this.limbs;
}

Snake.prototype.getCurrentDirection = function() {
  return this.currentDirection;
}

Snake.prototype.move = function(newDirection, isGrowing) {
  this.limbs.push(this.getNextPixel(newDirection));

  if (!isGrowing) {
    this.limbs.shift();
  }

  this.currentDirection = newDirection;
}
