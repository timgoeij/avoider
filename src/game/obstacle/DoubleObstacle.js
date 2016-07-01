import Obstacle from "./Obstacle";

/**
 * class double obstacle
 * 
 */
class DoubleObstacle extends Obstacle
{
    /**
     * class initialize obstacle and creates a extra obstacle
     *
     */
    constructor(parent, imgKey, goingLeftOrRight, speedExponential, game)
    {
        super(parent, imgKey, goingLeftOrRight, speedExponential, game);

        this.doubleSprite = this.createObstacle(true);
    }

    /**
     * Update the obstacle and the extra obstacle
     * 
     * @param gameClass
     */
    update(gameClass)
    {
        super.update(gameClass);

        if(this.direction == "right")
        {
            this.doubleSprite.body.velocity.x = 100 * this.speedExponential;

            if(this.doubleSprite.x > this.gameInstance.world.width)
            {
                this.dead = true;
                gameClass.score += 1;
            }
        }

        if(this.direction == "left")
        {
            this.doubleSprite.body.velocity.x = -100 * this.speedExponential;

            if(this.doubleSprite.x + this.doubleSprite.width < 0)
            {
                this.dead = true;
                gameClass.score += 1;
            }
        }

        if(this.dead)
            this.doubleSprite.kill();
    }
}

export default DoubleObstacle;