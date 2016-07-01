import Obstacle from "./Obstacle";

class DoubleObstacle extends Obstacle
{
    constructor(parent, imgKey, goingLeftOrRight, speedExponential, game)
    {
        super(parent, imgKey, goingLeftOrRight, speedExponential, game);

        this.doubleSprite = this.createObstacle(true);
    }

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