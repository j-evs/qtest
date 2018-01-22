import React, { Component } from "react";
import styled from "styled-components";

import Heart from "../svg-components/Heart";

const StyledHeart = styled(Heart)`
    width: 25px;
    height: 25px;
`;

const LikeButton = styled.button``;

const VideoWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const VideoInfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const LikeInfoWrapper = styled.div``;

const LikeCounter = styled.span``;

export default class Video extends Component {
    render() {
        const { width, height, src, title, likes, handleLikeClick } = this.props;
        return (
            <VideoWrapper>
                <iframe
                    title={title}
                    width={width}
                    height={height}
                    src={src}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
                <VideoInfoWrapper>
                    <LikeInfoWrapper>
                        <LikeButton onClick={handleLikeClick}>
                            <StyledHeart />
                        </LikeButton>
                        <LikeCounter>{likes}</LikeCounter>
                    </LikeInfoWrapper>
                    <p>{title}</p>
                </VideoInfoWrapper>
            </VideoWrapper>
        );
    }
}
