import _ from 'underscore';
import {View} from 'backbone'

/**
 * This view has the score of all players inside
 *
 * @constructor
 */
const ScoreList = View.extend(
    {
        template: '',
        
        /**
         * Initialize the getValues event and initialize the template
         *
         */
        initialize: function()
        {
            App.events.on("getValue", this.getValues, this);
            this.template = _.template(this.$('#templateAllScores').html());
        },

        /**
         * Get all scores out of the database
         * 
         */
        getValues: function (data) {
            
            let promise = new Promise((resolve, reject) =>
            {
                this.collection.fetch({
                    success: (collection, response, options) => this.successCollectionHandler(collection),
                    error: (collection, response) => this.errorCollectionHandler(collection, response)
                });
            });
        },

        /**
         * set the scores in the HTML DOM
         * 
         * @param collection
         */
        successCollectionHandler: function (collection) {
            this.$el.html(this.template({scores: collection.models}));
        },

        /**
         * Log the error message int he console
         * 
         * @param collection
         * @param response
         */
        errorCollectionHandler: function (collection, response) {
            console.log(response.responseJSON.error)
        }
    }
);

export default ScoreList;