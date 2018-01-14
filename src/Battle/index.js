import React, { Component } from "react";
import { connect } from 'react-redux';
import Video from "../Video";

const mapStateToProps = ({ battle: { videos, videoIds } }) => ({ videos, videoIds });

class Battle extends Component {

    render() {
        const { videos, videoIds } = this.props;
        const videosComponents = videoIds
            .map(videoId => videos[videoId])
            .map( ({id, ...props} ) => <Video key={ id } {...props} /> );

        return videosComponents;
    }
}

export default connect(mapStateToProps)(Battle);
