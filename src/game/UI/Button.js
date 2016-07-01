import reqwest from 'reqwest';

/**
 * Class button, creates a button for the start and the end
 */
class Button
{
    /**
     * initialize button
     * 
     * @param x
     * @param y
     * @param startOrEnd
     * @param imgKey
     * @param gameClass
     */
    constructor(x, y, startOrEnd, imgKey, gameClass)
    {
        this.sprite = gameClass.add.button(x ,y, imgKey, this.clickHandler, this);
        this.gameClass = gameClass;
        this.startOrEnd = startOrEnd;
        
        // if it is the end button make the button invisible
        if(!startOrEnd)
            this.sprite.visible = false;
    }

    /**
     * clickhandler for the button
     * 
     */
    clickHandler()
    {
        // if it is the start button, set the game state to GAME and make the button invisible
        if(this.startOrEnd)
        {
            this.gameClass.gameState = "GAME";
            this.sprite.visible = false;
        }
        else
        {
            //send the data to the database
            let scorePromise = new Promise((resolve, reject)=>
            {
                reqwest({
                    url: "http://timgoeijenbier.nl/avoider/webservice/score.php",
                    method: "post",
                    data: {nickname: this.gameClass.nickname, score: this.gameClass.score},
                    success: (json) => resolve(json),
                    error: (json) => reject(json),
                    crossOrigin: true
                })
            });

            scorePromise.then((data) =>
            {
                //after success reset the game
                if(data != null)
                    this.reset();

            }).catch((error) =>
            {
                console.log(error);
            });
            
            
        }
    }

    /**
     * reset the game
     * 
     */
    reset()
    {
        this.gameClass.obstacleArray.splice(0, this.gameClass.obstacleArray.length);
        this.gameClass.score = 0;
        this.gameClass.gameState = "START";
        this.gameClass.player.dead = false;
    }
}

export default Button;
