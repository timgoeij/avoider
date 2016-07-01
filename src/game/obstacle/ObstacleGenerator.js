import SingleObstacle from './SingleObstacle'
import DoubleObstacle from './DoubleObstacle'

/**
 * class obstacle generator that creates and deletes obstacles
 * 
 */
class ObstacleGenerator
{
    /**
     * create the obstacles
     * 
     * @param obstacleArray
     * @param game
     * @param obstacles
     * @param direction
     * @param speedExponential
     */
    createObstacle(obstacleArray, game, obstacles, direction, speedExponential)
    {
        let rand = Math.random();
        const OBSTACLE_KEY = "obstacle";

        if (rand < 0.5) {
            obstacleArray.push(new SingleObstacle(obstacles, OBSTACLE_KEY, direction, speedExponential, game));
        }
        else if (rand > 0.5)
        {
            obstacleArray.push(new DoubleObstacle(obstacles, OBSTACLE_KEY, direction, speedExponential, game));
        }
    }

    /**
     * delete the obstacle
     * 
     * @param obstacle
     * @param obstacleArray
     */
    deleteObstacle(obstacle, obstacleArray)
    {
        let index = obstacleArray.indexOf(obstacle);
        obstacleArray.splice(index,1);
    }
}

export default ObstacleGenerator;