import reqwest from 'reqwest';

class Button
{
    constructor(x, y, startOrEnd, imgKey, gameClass)
    {
        this.sprite = gameClass.add.button(x ,y, imgKey, this.clickHandler, this);
        this.gameClass = gameClass;
        this.startOrEnd = startOrEnd;
        
        if(!startOrEnd)
            this.sprite.visible = false;
    }

    clickHandler()
    {
        if(this.startOrEnd)
        {
            this.gameClass.gameState = "GAME";
            this.sprite.visible = false;
        }
        else
        {
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
                if(data != null)
                    this.reset();

            }).catch((error) =>
            {
                console.log(error);
            });
            
            
        }
    }

    reset()
    {
        this.gameClass.obstacleArray.splice(0, this.gameClass.obstacleArray.length);
        this.gameClass.score = 0;
        this.gameClass.gameState = "START";
        this.gameClass.player.dead = false;
    }
}

export default Button;
