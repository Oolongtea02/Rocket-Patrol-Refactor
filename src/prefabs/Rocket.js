// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing station
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        // left/right movement
        mouse.on
        (
            "pointermove", // event
            (pointer) => // callback
            {
                if(!this.isFiring)
                {
                    this.x = Phaser.Math.Clamp(pointer.x, 47, 578);
                    if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                        this.x -= this.moveSpeed;
                    } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                        this.x += this.moveSpeed;
                    }
                }
            },
            this
        );
       
        // fire button
        if(mouse.activePointer.leftButtonDown() && !this.isFiring) 
        {
          this.isFiring = true;
          this.sfxRocket.play(); // play the rocket sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= 108) this.y -= 2;
        // reset on miss
        if(this.y <= 108)
        {
            this.isFiring = false;
            this.y = 431;    
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}