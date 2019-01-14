class Ball {
  constructor(radius, bottom, left) {
    this.radius = radius;
    this.bottom = bottom;
    this.left = left;
    this.dx = 1;
    this.dy = 1;
  }

  negateX() {
    this.dx = -1;
  }

  negateY() {
    this.dy = -1;
  }

  positiveX() {
    this.dx = 1;
  }

  positiveY() {
    this.dy = 1;
  }

  move() {
    this.left += this.dx;
    this.bottom += this.dy;
  }
}
