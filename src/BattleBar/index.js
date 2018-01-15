import React, { Component } from "react";
import "./BattleBar.css";

import styled from 'styled-components';

const FirstVideo = styled.div`
    display: inline-block;
    height: 50px;
    width: ${props => `${props.width * 100}%`};
    background-color: goldenrod;
`;

const SecondVideo = styled.div`
    display: inline-block;
    height: 50px;
    width: ${props => `${props.width * 100}%`};
    background-color: seagreen;
`;

export default class BattleBar extends Component {
    render() {
        const { firstVideoLikes, secondVideoLikes } = this.props;
        const likeSum = firstVideoLikes + secondVideoLikes;
        const firstVideoPercentage = firstVideoLikes / likeSum;
        const secondVideoPercentage = secondVideoLikes / likeSum;
        return (
            <div className="battle-bar">
                <FirstVideo width={firstVideoPercentage} />
                <SecondVideo width={secondVideoPercentage} />
            </div>
        );
    }
}
