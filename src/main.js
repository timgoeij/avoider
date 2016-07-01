import 'phaser/build/custom/pixi';
import 'phaser/build/custom/p2';
import 'phaser';

import _ from 'underscore';
import {Events} from 'backbone';

import Game from "./game/Game";

import ScoreHolder from './views/Scoreholder';
import ScorePageButton from './views/ScorePageButton';

import ScoreList from './views/ScoreList';
import NicknameList from './views/NicknameList';
import ScoreWithNicknames from './views/ScoreWithNicknames'

import Holders from './models/Holders';

import Nicknames from './collections/Nicknames';
import Scores from './collections/Scores';

(function () {

    /**
     * setup the global variables for the events for backbone
     *
     */
    let setupGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };


    /**
     * initialize the game and the views of the application
     *
     */
    let init = function()
    {
        setupGlobalVariables();

        //The game
        var game = new Game();

        //the model that holds a parameter that decide the visibility of score
        var holderModel = new Holders();
        
        //the collection for the scores
        var scoresCollection = new Scores();
        
        //the collection for the nicknames
        var nicknamesCollection = new Nicknames();

        //the view of the button to the score page
        new ScorePageButton({el: "#score-button", model: holderModel});

        //the view of the container that holds the score objects
        new ScoreHolder({el: "#score-container", model:holderModel});

        //view the div with table with scores inside
        new ScoreList({el: "#AllScores", collection: scoresCollection});
        
        //view of the div with the table with scores from one player inside
        new ScoreWithNicknames({el:"#AllScoresByNickname", collection: scoresCollection});
        
        //view of the select with all the nicknames
        new NicknameList({el: "#nicknames", collection: nicknamesCollection});
        
        
        Backbone.history.start({pushState:true, root: '/avoider/'});
    };
    
    window.addEventListener("load", init);
    
})();
