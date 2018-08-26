function particule(x, y, v, r, cl) {
  this.x = x;
  this.y = y;
  this.vilocity = v;
  this.r = r;
  this.angle = Math.random() * 2 * Math.PI;
  this.distance = rnd(100, 200);
  this.color = cl;
  let exMouse = {
    x: x,
    y: y
  };
  this.draw = function(previous) {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.r;
    c.moveTo(previous.x, previous.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  }
  this.rotate = function() {
    let previous = {
      x: this.x,
      y: this.y
    };
    exMouse.x += (mouse.x - exMouse.x) * 0.05;
    exMouse.y += (mouse.y - exMouse.y) * 0.05;
    this.angle += this.vilocity;
    this.x = exMouse.x + Math.cos(this.angle) * this.distance;
    this.y = exMouse.y + Math.sin(this.angle) * this.distance;
    this.draw(previous);
  }
}