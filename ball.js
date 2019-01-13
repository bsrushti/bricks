class Ball {
  constructor(radius, bottom, left) {
    this.radius = radius;
    this.bottom = bottom;
    this.left = left;
    this.dx = 1;
    this.dy = 1;
  }

  move() {
    this.left += this.dx;
    this.bottom += this.dy;
  }
}

const ballCollideWithBounds = function(ball, bounds) {
  if (ball.left > bounds().left) {
    ball.dx = -1;
  }
  if (ball.left < bounds().right) {
    ball.dx = +1;
  }
  if (ball.bottom < bounds().bottom || ball.bottom > bounds().top) {
    ball.dy = -1;
  }
  ball.move();
};

const isBallOnPaddle = function(ball, paddle) {
  return (
    ball.bottom == paddle.bottom + 20 &&
    ball.left <= paddle.left + 100 &&
    ball.left > paddle.left
  );
};

const ballCollideWithPaddle = function(ball, paddle) {
  if (isBallOnPaddle(ball, paddle)) {
    ball.dy = 1;
    ball.dx = -1;
    ball.move();
  }
};

const moveBall = function(screen, ballDiv, ball, paddle) {
  setInterval(() => {
    if (ball.bottom == bounds().bottom) {
      location.reload();
    }
    ballCollideWithBounds(ball, bounds);
    ballCollideWithPaddle(ball, paddle);
    drawBall(ballDiv, ball);
    screen.appendChild(ballDiv);
  }, 5);
};
