/**
 * Base class of the obstacles
 * 
 */
class Obstacle
{
    /**
     * initialize obstacle
     * 
     * @constructor
     * @param parent
     * @param imgKey
     * @param goingLeftOrRight
     * @param speedExponential
     * @param game
     */
    constructor(parent, imgKey, goingLeftOrRight, speedExponential, game)
    {
        this.parent = parent;
        this.key = imgKey;
        this.direction = goingLeftOrRight;
        this.gameInstance = game;
        this.dead = false;
        
        this.sprite = this.createObstacle(false);
        
        this.speedExponential = speedExponential;
    }

    /**
     * Update the obstacle
     * 
     * @param gameClass
     */
    update(gameClass)
    {
        if(this.direction == "right")
        {
            this.sprite.body.velocity.x = 100 * this.speedExponential;

            if(this.sprite.x > this.gameInstance.world.width)
            {
                this.dead = true;
                gameClass.score += 1;
            }
                
        }

        if(this.direction == "left")
        {
            this.sprite.body.velocity.x = -100 * this.speedExponential;

            if(this.sprite.x + this.sprite.width < 0)
            {
                this.dead = true;
                gameClass.score += 1;
            }
        }

        if(this.dead)
            this.sprite.kill();
    }

    /**
     * Create a obstacle
     * 
     * @param double
     * @returns {*}
     */
    createObstacle( double)
    {
        let sprite = null;

        if(this.direction == "right")
        {
            if(double)
                sprite = this.parent.create(0, 0, this.key);
            else
                sprite = this.parent.create(0, this.gameInstance.world.height - 100, this.key);
        }
        else if(this.direction == "left")
        {
            if(double)
                sprite = this.parent.create(this.gameInstance.world.width - 25, 0, this.key);
            else
                sprite = this.parent.create(this.gameInstance.world.width -25, this.gameInstance.world.height - 100, this.key);
        }

        return sprite;
    }
}

export default Obstacle;