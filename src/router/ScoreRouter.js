import {Router} from 'backbone';

/**
 * Router for the URL'S for the scores and the game
 *
 * @constructor
 */
const ScoreRouter = Router.extend(
    {
        routes:
        {
            'index.html?view/:view': 'showView',
            'index.html': "hideView",
            'index.html?view/score/search/:nickname': 'searchForName'
        },
        
        /**
         * Callback function for the route to show the next view the game page or the score page
         *
         * @param view
         */
        showView: (view) =>
        {
            
            if(view == "score")
            {
                App.events.trigger('getValue', {});
                App.events.trigger('showScore', {});
            }

        },
        
        hideView: () =>
        {
            App.events.trigger('hideScore', {});
        },

        /**
         * Callback function for the route for finding all scores with the same nickname
         *
         * @param nickname
         */
        searchForName: (nickname) =>
        {
            
        }
    }
);

export default ScoreRouter;
