import React, { useEffect, useState } from 'react';

const GameScore = (props) => {
    // TODO: refactor for identifying server on left always
    return (
        <section className="game-score">
            <p className="game-score__name">Game Score</p>
            <p className="game-score__scores">
                <span className="score-1">
                    {
                        props.player1Point ? props.player1Point : 0
                    }
                </span>
                :
                <span className="score-2">
                {
                    props.player2Point ? props.player2Point : 0
                }
                </span>
            </p>
        </section>
    )
};

export default GameScore;