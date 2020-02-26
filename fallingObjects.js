class  PositiveObject{
  constructor(x, y, w, h, pValue, speed, src) {
    this.x = x;
    this.y = y;
    this.width=w;
    this.height=h;
    this.pointValue = pValue;
    this.speed=speed;
    this.imgSrc = src;
    this.alive = true;
  }
    
  onCollision() {
    player.score+=speed;
  }
    
  drawFallingObject() {
    ctx.beginPath();
    this.y+=this.speed;
    if(this.y > canvas.height)
        this.alive = false; 
    ctx.drawImage(this.imgSrc, this.x, this.y, this.width, this.height);
  }
}