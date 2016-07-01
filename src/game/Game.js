import Phaser from 'phaser'
import Player from './Player'
import ObstacleGenerator from './obstacle/ObstacleGenerator'
import Button from './UI/Button'
import Label from './UI/Label'

/**
 * this the game class with the game inside
 * 
 */
class Game
{
    /**
     * intialize the variables to use in the class
     * 
     * @constructor
     */
    constructor()
    {
        //initialize Phaser
        this.game = new Phaser.Game(1200, 300, Phaser.AUTO, 'game-container',{preload: this.preload, create: this.create, update: this.update });
        this.player = null;

        this.timer = 0;
        this.delay = 0;
        this.wave = 0;
        this.score = 0;
        this.nickname = "";

        this.obstacleSpeedExponential = 0;
        this.obstacleDirection = "";
        this.obstacleArray = null;
        this.generator = null;
        
        this.startButton = null;
        this.endButton = null;
        
        this.scoreField = null;
        this.inputField = null;
        
        this.gameState = "";
    }

    /**
     * Create all sprites for the game and initialize variables to use in phaser
     * 
     */
    create()
    {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.obstacles = this.game.add.group();
        this.obstacles.enableBody = true;
        this.obstacleArray = [];
        this.obstacleSpeedExponential = 1;
        this.obstacleDirection = "left";

        this.startButton = new Button(this.game.world.centerX - 125, this.game.world.centerY - 50, true, "startButton", this);
        this.endButton = new Button(this.game.world.centerX - 125, this.game.world.centerY - 50, false, "scoreButton", this);
        this.scoreField = new Label(this.game.world.centerX + 200, this.game.world.centerY - 16, this, true);
        this.inputField = new Label(this.game.world.centerX - 500, this.game.world.centerY - 16, this, false);
        
        this.player = new Player(this.game);
        this.generator = new ObstacleGenerator();
        
        this.timer = 0;
        this.delay = 10000;
        this.wave = 0;
        
        this.score = 0;
        this.nickname = "";
        
        this.gameState = "START";
    }

    /**
     * load images in the game and change the color of the background
     * 
     */
    preload()
    {
        this.game.stage.backgroundColor = "#FFFFFF";
        this.game.canvas.id = "game";
        this.game.load.images(["player", "obstacle", "startButton", "scoreButton"], 
            ["img/player.png", "img/wal.png", "img/start.png", "img/send.png"]);
    }

    /**
     * Update function to update the game
     * 
     */
    update()
    {
        switch(this.gameState)
        {
            case "START": 
                
                this.endButton.sprite.visible = false;
                this.startButton.sprite.visible = true;
                this.scoreField.sprite.visible = false;
                this.inputField.sprite.visible = false;
                
                break;
            case "GAME":

                if(this.game.physics.arcade.overlap(this.player.sprite, this.obstacles))
                {
                    this.player.dead = true;
                    this.gameState = "SCORE";
                } 
                
                this.scoreField.sprite.visible = true;
                this.scoreField.update();

                this.player.update();

                if(this.game.time.now > this.timer)
                {
                    if(this.wave % 5 == 0 && this.obstacleArray.length > 0)
                    {
                        if(this.delay > 3000)
                            this.delay -= 500;
                        else if(this.obstacleSpeedExponential <= 2)
                            this.obstacleSpeedExponential += 0.05;

                        if(this.obstacleDirection == "left")
                            this.obstacleDirection = "right";
                        else
                            this.obstacleDirection = "left";
                    }
                    this.generator.createObstacle(this.obstacleArray, this.game, this.obstacles,
                        this.obstacleDirection, this.obstacleSpeedExponential);

                    this.wave++;
                    this.timer = this.game.time.now + this.delay;
                }

                for(let obstacle of this.obstacleArray)
                {
                    if(obstacle.dead)
                        this.generator.deleteObstacle(obstacle, this.obstacleArray);
                    
                    if(this.player.dead)
                        obstacle.dead = true;
                    
                    obstacle.update(this);
                }
                
                break;
            case "SCORE": 
                
                this.endButton.sprite.visible = true;
                this.inputField.setInputfieldVisible();
                this.inputField.update();
                
                break;
        }
        
        
    }
}

export default Game;