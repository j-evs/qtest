import React, { Component } from "react";
import Video from "../Video";

export default class Battle extends Component {
    render() {
        return (
            <div>
                <Video
                    title="vid1"
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/1Wh8RzcQZr4?rel=0"
                />
                <Video
                    title="vid2"
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/1kgmfPClsZc?rel=0"
                />
            </div>
        );
    }
}
