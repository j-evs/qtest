import { combineReducers } from 'redux';

const initialState = {
    videos: {
        1: {
            id: 1,
            src: "https://www.youtube-nocookie.com/embed/1Wh8RzcQZr4?rel=0",
            width: 560,
            height: 315,
            title: "vid1",
            likes: 500
        },
        2: {
            id: 2,
            src: "https://www.youtube-nocookie.com/embed/1kgmfPClsZc?rel=0",
            width: 560,
            height: 315,
            title: "vid2",
            likes: 300
        }
    },
    videoIds: [1, 2]
};

function battle(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({battle});