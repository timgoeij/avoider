import {View} from 'backbone'

/**
* This view has the score inside and change the visibility
*
* @constructor
*/
const ScoreHolder = View.extend(
    {
        /**
         * initialize the change:seeGame event
         *
         */
        initialize: function()
        {
            this.model.on('change:seeScore', this.changeVisibility, this);
        },

        /**
         * Change the visibility into hide or visible
         *
         * @param model
         * @param seeGame
         */
        changeVisibility: function(model, seeScore)
        {
            this.$el.toggleClass('hide');
        }
    }
);

export default ScoreHolder;
