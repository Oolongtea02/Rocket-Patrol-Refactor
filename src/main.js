/* 
Samuel Zhang
CMPM 120 (Game Development Experience) Rocket Patrol Mods Assignment
Mod Title: Rocket Patrol II: Firework OutsideLands
Time Spent: ~12 hours
Mods Completed: 
* Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
* Implement the speed increase that happens after 30 seconds in the original game (5)
* Create a new scrolling tile sprite for the background (5)
* Allow the player to control the Rocket after it's fired (5)
* Create a new title screen (e.g., new artwork, typography, layout) (10)
* Create 4 new explosion sound effects and randomize which one plays on impact (10)
* Implement parallax scrolling for the background (10)
* Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
 - used piskelapp to draw the fireball sprite and used spritesheet to animate it on impact
* Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship(15)
* Implement mouse control for player movement and mouse click to fire (15)
* Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
Citations: 
- borrowed art/tilesprites from OpenGameArt.org
- referenced examples from https://docs.idew.org/video-game/project-references/phaser-coding/tilesprite-scrolling for parallax
*/

let config = {
    type: Phaser.CANVAS,
    width: 640, 
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config); 

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyM, keyR, keyLEFT, keyRIGHT;

//mouse input
let mouse;