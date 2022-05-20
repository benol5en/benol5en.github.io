class Ship {
  constructor(x,y,h,w) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
  } 
  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5); 
  }
  show() {
    stroke(0);
    strokeWeight(0);
    fill(66,66,66,100);
    rect(this.x,this.y, this.h, this.w);
  }
}
