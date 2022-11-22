import React from 'react';

const PlayerNames = (props) => {
    const {server, isPlayer1OnLeft} = props;
    // server 0 -> player1 ________ server 1 -> player2

    let serverStyles;
    let flexOrderForPlayer1, flexOrderForPlayer2;
    if(isPlayer1OnLeft && server === 0) {
        flexOrderForPlayer1 = 0;
        flexOrderForPlayer2 = 1;
        serverStyles = '-20px';
    } else if(!isPlayer1OnLeft && server === 0) {
        flexOrderForPlayer1 = 1;
        flexOrderForPlayer2 = 0;
        serverStyles = '103%';
    } else if(isPlayer1OnLeft && server === 1) {
        flexOrderForPlayer1 = 0;
        flexOrderForPlayer2 = 1;
        serverStyles = '103%';
    } else if(!isPlayer1OnLeft && server === 1) {
        flexOrderForPlayer1 = 1;
        flexOrderForPlayer2 = 0;
        serverStyles = '-20px';
    }
    // if left side -> player 1            right side -> player 0
    // isPlayer0OnLeft: true ->  
    return (
        <section className="player-names">
            <span className={`active-icon player1-active`} style={{left: `${serverStyles}`}}></span>
            <p className="name active" style={{order: `${flexOrderForPlayer1}`}}>
                <p className="full-name">{props.player1[0]}</p>
                <p className="surname">{props.player1[1]}</p>
            </p>
            <p className="name"  style={{order: `${flexOrderForPlayer2}`}}>
                <p className="full-name">{props.player2[0]}</p>
                <p className="surname">{props.player2[1]}</p>
            </p>
        </section>
    )
};

export default PlayerNames;