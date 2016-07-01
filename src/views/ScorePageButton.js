import {View} from 'backbone'
import ScoreRouter from '../router/ScoreRouter'

/**
* This view is for the button that makes the score visible
*
* @constructor
*/
const ScorePageButton = View.extend(
    {
        router: null,
        
        events:
        {
            'click': 'clickHandler'
        },

        /**
         * initialize router and showScore event
         *
         */
        initialize: function ()
        {
            this.router = new ScoreRouter();
            App.events.on('showScore', this.showScore, this);
            App.events.on('hideScore', this.hideScore, this);
        },

        /**
         * Click handler that navigate to the event that makes the score visible
         *
         * @param e
         */
        clickHandler: function(e)
        {
            let url = "";
            
            if(!this.model.get('seeScore'))
                url = "index.html?view/score";
            else
                url = "index.html";
            
            this.router.navigate(url, {trigger:true, replace:true});
        },
        
        /**
         * set the values that make the score visible and the game invisible
         *
         * @param data
         */
        showScore: function(data) {
            
            this.model.set({seeScore: true});
        },
        
        hideScore: function (data) {

            if(this.model.get('seeScore'))
                this.model.set({seeScore: false});
        }
    }
);

export default ScorePageButton;