import React, { Component } from "react";

export default class Video extends Component {
    render() {
        const { width, height, src, title } = this.props;
        return (
            <iframe
                title={title}
                width={width}
                height={height}
                src={src}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            />
        );
    }
}
