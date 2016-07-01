import SingleObstacle from './SingleObstacle'
import DoubleObstacle from './DoubleObstacle'


class ObstacleGenerator
{
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

    deleteObstacle(obstacle, obstacleArray)
    {
        let index = obstacleArray.indexOf(obstacle);
        obstacleArray.splice(index,1);
    }
}

export default ObstacleGenerator;