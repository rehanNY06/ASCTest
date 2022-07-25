/*let zombie;
let zombie2;

let ZombieX = 350;
let ZombieY = 350;

let zombies = [];
let playerCoords = [250,250];

// let image3; 

// let counter = 0

// let r = 0;
// let g = 0;
// let b = 255;

// let myXPos = 100;
// let myYPos = 100;
// let enemyXPos = 300;
// let enemyYPos = 300;
// let enemy2XPos = 400;
// let enemy2YPos = 400;

// let myLeft, myRight, myTop, myBottom;
// let enemyLeft, enemyRight, enemyTop, enemyBottom;

Player generated in middle of room
Random number of zombies (in a range) spawns around the player
Zombies slowly try to get to the player by following the player’s coordinates.
Give 2 health to zombies and 10 health to players.
Add a collision function. If zombies collide with a player, the player loses 1 health.
Add a shooting function. If the  spacebar is pressed, yellow rectangles acting as bullets come out of players. Collision with zombies makes zombies lose 1 health.
Zombies try to get to player and player tries to defeat the zombies before health runs out

let playerImage;
let zombieImage;

function preload() {
    playerImage = loadImage("Player.png");
    zombieImage = loadImage("Zombie.png");
}

function setup() {
    createCanvas(800, 600);
    noStroke();

    imageMode(CENTER);

    for (let i = 0; i < 100; i++) {
        let temp = new Zombie(random(0, 500), random(0, 500), 50, 50);
        zombies.push(temp);
      
}
}

function draw() {
    background(0);

    image(playerImage, playerCoords[0], playerCoords[1], 50, 50);

    for (let i = 0; i < zombies.length; i++) {
        image(zombiesImage, zombies[i].spawnX, zombies[i].spawnY, zombies.width, zombies.height);
    }
    
    if (keyIsDown(LEFT_ARROW)) { 
        playerCoords[0]-=3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        playerCoords[0]+=3;
    }

    if (keyIsDown(UP_ARROW)) {
        playerCoords[1]-=3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        playerCoords[1] += 3;
    }

    // myLeft = playerCoords[0] - 25;    
    // myRight = playerCoords[0] + 25;
    // myTop = playerCoords[1] - 25;
    // myBottom = playerCoords[1] + 25;

    // enemyLeft = enemyXPos - 25;
    // enemyRight = enemyXPos + 25;
    // enemyTop = enemyYPos - 25;
    // enemyBottom = enemyYPos + 25;

    // enemy2Left = enemy2XPos - 25;
    // enemy2Right = enemy2XPos + 25;
    // enemy2Top = enemy2YPos - 25;
    // enemy2Bottom = enemy2YPos + 25; 

    // if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
    //     fill(255, 255, 255);
    //     textSize(22);
    //     text("Score:", 50, 50);
    //     text(counter, 120, 51);
    // }

    // if (myLeft < enemy2Right || myRight > enemy2Left || myTop < enemy2Bottom || myBottom > enemy2Top){
    //     enemy2XPos = random(0, 500);
    //     enemy2YPos = random(0, 500);
    //     fill(255, 255, 255);
    //     textSize(22);
    //     text("Score:", 50, 50);
    //     counter --;  
    // }

}

class Zombie {
    constructor(x, y, w, h) {
        this.spawnX = x;
        this.spawnY = y;
        this.width = w;
        this.height = h;
    }
}*/

 

let image1;
let image2;
let image3;

let counter = 0

let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let e2xpos = 400;
let e2ypos = 400;
 
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function setup() {
   createCanvas(800, 500);
   noStroke();
 
   imageMode(CENTER);

   image1 = loadImage("coins.jpg");
   image2 = loadImage("Player.png");
   image3 = loadImage("Zombie2.png");
}
 
function draw() {
   background(0);

 
   image(image1, enemyXPos, enemyYPos, 50, 50);
 
   
   image(image2, myXPos, myYPos, 50, 50);

  
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 6;
   }
 
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 6;
   }
 
   if (keyIsDown(UP_ARROW)) {
       myYPos -= 6;
   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 6;
   }
 
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;
 
   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;

   
 
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        fill(255, 255, 255);
        textSize(22);
        text("Score:", 50, 50);
        text(counter, 120, 51);
   }
 
   else {
       enemyXPos = random(25, 500);
       enemyYPos = random(25, 500);
       counter++;
       text(counter, 30, 50);

   }

   if (counter > 2) {
    image(image3, e2xpos, e2ypos, 50, 50);
    if (e2xpos > myXPos){
        e2xpos -= 4;
    }

    else if (e2ypos > myYPos){
        e2ypos -= 4;
    }

    else if (e2xpos < myXPos){
        e2xpos += 4;
    }

    else if (e2ypos < myYPos){
        e2ypos += 4;
    }

   

   }

}
