const selectVideoById = (state, videoId) => state[videoId];
const increaseVideoLikes = (videoToUpdate) => ({
    ...videoToUpdate,
    likes: videoToUpdate.likes + 10
});

const initialState = {
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
};

const videos = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_LIKE":
            const videoToUpdate = selectVideoById(state, payload);
            return Object.assign({}, state, {
                [payload]: increaseVideoLikes(videoToUpdate)
            });
        default:
            return state;
    }
};

export default videos;
