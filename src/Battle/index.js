import React, { Component } from "react";
import { connect } from "react-redux";
import Video from "../Video";
import BattleBar from "../BattleBar";

const mapStateToProps = ({ battle: { videos, videoIds } }) => ({
    videos,
    videoIds
});

class Battle extends Component {
    render() {
        const { videos, videoIds } = this.props;
        const videosComponents = videoIds
            .map(videoId => videos[videoId])
            .map(({ id, ...props }) => <Video key={id} {...props} />);

        const firstVideo = videos[videoIds[0]];
        const secondVideo = videos[videoIds[1]];
        return (
            <div>
                {videosComponents}
                <BattleBar
                    firstVideoLikes={firstVideo.likes}
                    secondVideoLikes={secondVideo.likes}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Battle);
