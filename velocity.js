class Velocity {
  constructor(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }

  negateX() {
    this.dx = -this.dx;
  }

  negateY() {
    this.dy = -this.dy;
  }
}
