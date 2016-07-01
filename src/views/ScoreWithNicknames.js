import _ from 'underscore';
import {View} from 'backbone'

/**
 * This view has all scores of one player inside
 *
 * @constructor
 */
const ScoreWithNicknames = View.extend(
    {
        templateScores: "",

        /**
         * initialize the change:seeGame event
         *
         */
        initialize: function()
        {
            App.events.on("showNicknameScore", this.getValues, this);
            this.templateScores = _.template(this.$('#templateAllScoresByNickname').html());
        },

        getValues: function (data)
        {
            this.nickname = data.nickname;

            let promise = new Promise((resolve, reject) =>
            {
                this.collection.fetch({
                    success: (collection) => this.successCollectionHandler(collection),
                    error: (collection, response) => this.errorCollectionHandler(collection, response),
                    data: {name: data.nickname}
                });
            });
        },

        successCollectionHandler: function (collection) {
            
            this.$el.html(this.templateScores({scores: collection.models}));
        },

        errorCollectionHandler: function (collection, response) {
            console.log(response.responseJSON.error);
        }
    }
);

export default ScoreWithNicknames;