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
	var pX=player.x+player.width*0.6;
	var pW=player.width*0.05;
	var pY=player.y;
	var pH=player.height;
  
	var tX=this.x;// + 10;
	var tW=this.width;// - 10;
	var tY=this.y;
	var tH=this.height;
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
  	//play.lives--;
  }
}