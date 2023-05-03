class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {
        //load images
        this.load.image('menuColor', './assets/menuColor.png');
        this.load.image('fireball', './assets/fireball.png');
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        //load 4 explosion sound effects
        this.load.audio('sfx_explosion0', './assets/explosion1.wav');
        this.load.audio('sfx_explosion1', './assets/explosion2.wav');
        this.load.audio('sfx_explosion2', './assets/explosion3.wav');
        this.load.audio('sfx_explosion3', './assets/explosion4.wav')
        //load background soundtrack
        this.load.audio('music_sushiGo', './assets/sushiGo.mp3');
    }

    create() {
        this.add.image(0, 0, 'menuColor').setOrigin(0, 0);
        this.add.image(0, 0, 'fireball').setOrigin(0, 0);
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#5b83cf', //#F3B141
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        } 
        
        // show menu text
        const text = this.add.text(60, 100, 'ROCKET PATROL', {
            fontFamily: 'Courier',
            fontSize: '64px',
            color: '#8a3044',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text1 = this.add.text(60, 160, 'Use mouse to \n move & leftclick to fire', {
            fontFamily: 'Courier',
            fontSize: '32px',
            color: '#5e303a',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text2 = this.add.text(20, 260, 'Press <- for Novice or -> for Expert', {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: '#210d11',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text3 = this.add.text(60, 340, 'Tip: After clicking, \n you can move the left/right \n arrowkeys to conrol the rocket movement', {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#5e303a',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        menuConfig.backgroundColor = '#CCCCFF'; //#65c79b'
        menuConfig.color = '#000';
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}