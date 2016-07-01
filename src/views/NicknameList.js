import _ from 'underscore';
import {View} from 'backbone'
import ScoreRouter from '../router/ScoreRouter'

/**
 * This view is the dropdown list inside with all nicknames
 *
 * @constructor
 */
const NicknameList = View.extend(
    {
        template: '',
        router: null,
        
        events:
        {
          'change': 'changeHandler'  
        },

        /**
         * Initialize the getValues and change event and initialize the template
         *
         */
        initialize: function()
        {
            App.events.on("getValue", this.getValues, this);
            this.template = _.template(this.$('#templateNicknames').html());
            this.router = new ScoreRouter();
        },

        changeHandler: function (e) 
        {
            App.events.trigger('showNicknameScore', { nickname: this.$el.val()});
        },

        /**
         * Get all diferent nicknames out of the database
         *
         */
        getValues: function (data) {

            let promise = new Promise((resolve, reject) =>
            {
                this.collection.fetch({
                    success: (collection) => this.successCollectionHandler(collection),
                    error: (collection, response) => this.errorCollectionHandler(collection, response),
                    data: {nicknames:true}
                });
            });
        },

        /**
         * set all nicknames in the dropdown list
         *
         * @param collection
         */
        successCollectionHandler: function (collection) {
            
            this.$el.html(this.template({nicknames: collection.models}));
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

export default NicknameList;