import {Collection} from 'backbone';
import Score from '../models/Score';


/**
 * Collection to collect all scores
 *
 * @constructor
 */
const Scores = Collection.extend({
    model: Score,
    url: "http://timgoeijenbier.nl/avoider/webservice/score.php"
});

export default Scores;