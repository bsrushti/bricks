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
}
