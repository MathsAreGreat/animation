let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let balls = [];
let x, y, r, v, distance = 100,
  rmax = 100,
  p = 1;
let mouse = {
  x: null,
  y: null
};
let colors = [
  "#B21212",
  "#FFFC19",
  "#FF0000",
  "#1485CC",
  "#1485CC"
];

let rnd = (a, b) => {
  if (a > b) return rnd(b, a);
  if (!b) return rnd(0, a);
  return Math.random() * (a - b) + b;
}

r = Math.random() * 1 + 1;
x = window.innerWidth / 2;
v = 0.06;
y = window.innerHeight / 2;

for (var i = 0; i < 100; i++) balls.push(new particule(x, y, v, r, colors[Math.floor(rnd(colors.length - 1))]));

let initialize = () => {
  balls = [];
  for (var i = 0; i < 100; i++) balls.push(new particule(x, y, v, r, colors[Math.floor(rnd(colors.length - 1))]));
  moveit();
}
let moveit = () => {
  c.fillStyle = 'rgba(255,255,255,0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  for (ball of balls) ball.rotate();
  requestAnimationFrame(moveit);
}
let callbacks = (event) => {
  mouse.y = event.y;
  mouse.x = event.x;
}
window.addEventListener("mousemove", callbacks);
window.addEventListener("resize", function() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  initialize();
});

moveit();