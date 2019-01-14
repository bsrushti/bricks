class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class VerticalWall {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  changeVelocityOf(ball) {
    if (ball.left > this.left) {
      ball.velocity.negateX();
    }

    if (ball.left < this.right) {
      ball.velocity.negateX();
    }
  }
}

class HorizontalWall {
  constructor(top, bottom) {
    this.top = top;
    this.bottom = bottom;
  }

  changeVelocityOf(ball) {
    if (ball.bottom < this.bottom || ball.bottom > this.top) {
      ball.velocity.negateY();
    }
    if (ball.bottom == this.bottom) {
      location.reload();
    }
  }
}
