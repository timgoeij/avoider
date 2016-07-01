import {Collection} from 'backbone';
import Nickname from '../models/Nickname';

/**
 * Collection to collect all nicknames
 * 
 * @constructor
 */
const Nicknames = Collection.extend({
    model: Nickname,
    url: "http://timgoeijenbier.nl/avoider/webservice/score.php"
});

export default Nicknames;