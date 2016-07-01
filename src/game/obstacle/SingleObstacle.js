import Obstacle from "./Obstacle"

/**
 * class singleObstacle
 * 
 */
class SingleObstacle extends Obstacle
{
    /**
     * initialize obstacle
     * 
     * @param parent
     * @param imgKey
     * @param goingLeftOrRight
     * @param speedExponential
     * @param game
     */
    constructor(parent, imgKey, goingLeftOrRight, speedExponential, game)
    {
        super(parent, imgKey, goingLeftOrRight, speedExponential, game);
    }
}

export default SingleObstacle;
