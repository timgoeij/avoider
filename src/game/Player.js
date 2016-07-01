import Phaser from 'phaser'

/**
 * Class player, the player in the game
 */
class Player
{
    /**
     * initialize the player
     * 
     * @param game
     */
    constructor(game)
    {
        this.gameInstance = game;
        
        this.sprite = game.add.sprite((game.world.width / 2) - 25, game.world.height - 50, "player");

        game.physics.arcade.enable(this.sprite);

        this.sprite.body.bounce.y = 0;
        this.sprite.body.gravity.y = 100;
        this.sprite.body.collideWorldBounds = true;

        this.dead = false;
    }

    /**
     * update the player
     * 
     */
    update()
    {
        let keys =  this.gameInstance.input.keyboard.createCursorKeys();
        
        this.sprite.body.velocity.x = 0;
        
        if(!this.dead)
        {
            if(keys.right.isDown)
                this.sprite.body.velocity.x = 50;

            if(keys.left.isDown)
                this.sprite.body.velocity.x = -50;

            if(keys.up.isDown)
            {
                if(this.sprite.y == this.gameInstance.world.height - this.sprite.height)
                {
                    this.sprite.body.velocity.y =  -160;
                }
            }
        }
        
        
    }
}

export default Player;