class Spaceship1 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
    }

    update() {
        //move spaceship left
        this.x -= 7;
        //wrap around from left to right edge
        if (this.x <= 0-this.width) {
            this.x = reset()
        }
    }

    reset() {
        this.x = game.config.width;
    }
}