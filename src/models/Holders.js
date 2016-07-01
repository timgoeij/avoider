import {Model} from 'backbone';

/**
 * Holders model that contains the seeGame boolean that decides is the game or the score visible
 */
const Holders = Model.extend(
    {
        seeScore: false
    }
);

export default Holders
