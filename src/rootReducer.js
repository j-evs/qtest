import { combineReducers } from 'redux';

import videos from './Battle/reducer';

function videoIds (state = [1, 2], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const battle = combineReducers({videos, videoIds});
export default combineReducers({battle});