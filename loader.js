var lastDirection = defaultDirection;

var game;
window.onload = function() {
    game = new Game(30, 30);
    var interval = window.setInterval(function() {
      var isDead = game.update(lastDirection);

      if (isDead) {
        console.error("**ending game!!");
        window.clearInterval(interval);
      }
    }, 100);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        lastDirection = directions.LEFT;
    } else if(event.keyCode == 38) {
        lastDirection = directions.UP;
    } else if(event.keyCode == 39) {
        lastDirection = directions.RIGHT;
    } else if(event.keyCode == 40) {
        lastDirection = directions.DOWN;
    }
});
