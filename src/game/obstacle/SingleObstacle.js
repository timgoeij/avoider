import Obstacle from "./Obstacle"

class SingleObstacle extends Obstacle
{
    constructor(parent, imgKey, goingLeftOrRight, speedExponential, game)
    {
        super(parent, imgKey, goingLeftOrRight, speedExponential, game);
    }
}

export default SingleObstacle;
