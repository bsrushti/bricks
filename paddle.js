class Paddle {
  constructor(width, height, left, bottom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
  }

  moveLeft(limit) {
    if (this.left != limit) {
      this.left -= 10;
    }
  }

  moveRight(limit) {
    if (this.left != limit) {
      this.left += 10;
    }
  }

  isBallOnPaddle(ball) {
    return (
      ball.bottom == this.bottom + 20 &&
      (ball.left <= this.left + 100 && ball.left > this.left)
    );
  }

  changeVelocityOf(ball) {
    if (this.isBallOnPaddle(ball)) {
      ball.positiveY();
      ball.negateX();
      ball.move();
    }
  }
}
