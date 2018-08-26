function Ball(x, y, sx, sy, r) {
  this.x = x;
  this.sx = sx;
  this.y = y;
  this.sy = sy;
  this.r = r;
  this.rmin = r;
  this.color = colors[Math.floor(Math.random() * (colors.length - 1))];
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.stroke();
    c.strokeStyle = 'black';
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
  this.bounce = function() {
    if (this.x + this.r > canvas.width || this.x < this.r) this.sx = -this.sx;
    if (this.y + this.r > canvas.height || this.y < this.r) this.sy = -this.sy;

    this.x += this.sx;
    this.y += this.sy;
    this.draw();
  }
  this.gravite = function() {
    if (this.x + this.r > canvas.width || this.x < this.r) this.sx = -this.sx;
    this.x += this.sx;
    if (this.y + this.r > canvas.height || this.y + this.r == canvas.height) this.sy = -this.sy * friction;
    else this.sy += gravity;

    this.y += this.sy;
    this.draw();
  }
}