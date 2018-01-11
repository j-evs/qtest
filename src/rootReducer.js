import { combineReducers } from 'redux';

function dummyReducer(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({dummyReducer});