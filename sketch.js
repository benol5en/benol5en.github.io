var shiparray = [];
var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  for (let i = 0; i < 20; i++) {
    let q = random(windowWidth);
    let a = random(windowHeight);
    let p = random(0,100);
    let o = random(0,100);
  shiparray[i] = new Ship(a,q,p,o);
  }
}
  

//function keyPressed() {
//  clear();
//}

function mousePressed() {
  let h = random(1,50);
  let w = random(1,50);
  let pressed = new Ship(mouseX, mouseY, w,h);  
    shiparray.push(pressed);
}

function draw() {
//  for (let i = 0; i < shiparray.length; i++) {
  for (let ships of shiparray){
  ships.move();
  ships.show();
  }
}
