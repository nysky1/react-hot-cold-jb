import React from 'react';

import './game-status.css';
export default function GameStatus(props) {
    return (
        <div className="gameStatus">{props.gameStatus}</div>
    )
}