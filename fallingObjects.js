class  FallingObject{
  constructor(x, y, w, h, pValue, speed, src, id) {
    this.x = x;
    this.y = y;
    this.width=w;
    this.height=h;
    this.pointValue = pValue;
    this.speed=speed;
    this.imgSrc = src;
    this.alive = true;
    this.id=id;
  }
    
  onCollision() {}
    
  drawFallingObject() {
    ctx.beginPath();
    this.y+=this.speed;
    if(this.y > canvas.height)
        this.alive = false; 
    ctx.drawImage(this.imgSrc, this.x, this.y, this.width, this.height);
  }
  
  getID(){
  	return this.id;
  }
  
  
  checkPlayerCollisions(){
	let pX=player.x+player.width*0.4;
	let pW=player.width*0.2;
	let pY=player.y;
	let pH=player.height*0.8;
  
	let tX=this.x;
	let tW=this.width;
	let tY=this.y;
	let tH=this.height;
  	if(pX < tX + tW &&
  		pX + pW > tX &&
  		pY < tY + tH &&
  		pY + pH > tY)
  		{
  			this.onCollision();
  			this.alive = false; 
  		}
  }
}

class PositiveObject extends FallingObject{
	constructor(x, y, w, h, pValue, speed, src, id) {
		super(x, y, w, h, pValue, speed, src, id);
  }

	onCollision() {
    player.score+=this.pointValue;
  }
}

class NegativeObject extends FallingObject{
	constructor(x, y, w, h, speed, src, id) {
		super(x, y, w, h, 0, speed, src, id);
  }
  
  onCollision() {
  	player.lives--;
  }
}