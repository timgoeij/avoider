/**
 * Class creates a label to render text in the game
 * 
 */
class Label
{
    /**
     * initialize the labels
     * 
     * @param x
     * @param y
     * @param gameClass
     * @param isScorefield
     */
    constructor(x, y, gameClass, isScorefield)
    {
        this.sprite = null;
        this.isScoreField = isScorefield;
        this.typeInput = "";
        
        if(isScorefield)
        {
            this.sprite = gameClass.add.text(x, y, "score: 0", { fontSize: '32px', fill: '#000' });
        }
        else 
        {
            this.sprite = gameClass.add.text(x, y, "type youre nickname");
        }
        
        this.typeHolder = "type youre nickname";
        
        this.gameClass = gameClass;
        this.sprite.visible = false;
    }

    /**
     * update the labels
     */
    update()
    {
        //update the score value in the label
        if(this.isScoreField)
        {
            this.sprite.text = "Score: " + this.gameClass.score;
        }
        else
        {
            //update the value of the input what the player fills in
            if(this.typeInput === "")
                this.sprite.text = this.typeHolder;
            else {
                this.sprite.text = this.typeInput;
                this.gameClass.nickname = this.typeInput;
            }
        }
    }

    /**
     * Makes the inputlabel visible and creates a keyboard callback
     * 
     */
    setInputfieldVisible()
    {
        if(!this.sprite.visible)
        {
            this.gameClass.input.keyboard.addCallbacks(this,null,this.updateInputLabel,null);
            this.sprite.visible = true;
        }
    }

    /**
     * Callback function of the keyboard and change the value of the inputlabel
     * 
      * @param key
     */
    updateInputLabel(key)
    {
        switch(key.keyCode) 
        {

            case 8:

                this.typeInput = this.typeInput.substring(0, this.typeInput.length - 1);

                break;

            default:

                let char = String.fromCharCode(key.keyCode).toString();

                    if (char.length > 0 && char.length < 2) {

                        this.typeInput += char;
                    }
                break;

        }
    }
}

export default Label;
