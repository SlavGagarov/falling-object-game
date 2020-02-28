let playersize = canvas.width / 6;

let player = {
    x: canvas.width / 2,
    y: canvas.height - playersize * 1.5,
    size: playersize,
    height: playersize * 1.5,
    width: playersize,
    speed: canvas.width / 100,
    action: "stay",
    score: 0,
	lives: 3
}

const drawPlayer = () => {
    ctx.beginPath();
    switch(player.action) {
        case "moveRight":
            player.x += player.speed;
            break;
        case "moveLeft":
            player.x -= player.speed;
            break;
    }
    if(player.x > canvas.width - player.size) 
        player.x = canvas.width - player.size;
    if(player.x < 0) 
        player.x = 0;
    ctx.drawImage(playerAvatar, player.x, player.y, player.width, player.height);
}