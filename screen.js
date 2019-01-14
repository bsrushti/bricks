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
      ball.negateX();
    }

    if (ball.left < this.right) {
      ball.positiveX();
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
      ball.negateY();
    }

    if (ball.bottom == this.bottom) {
      location.reload();
    }
  }
}
