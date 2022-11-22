import React from 'react';

const SetScores = (props) => {
    const sets = props.sets;
    const player1GamesWon = sets[0].map(set => set.gamesWon);
    const player2GamesWon = sets[1].map(set => set.gamesWon);
    const winnerStyle = {
        color: '#F15025'
    }
    return (
        <section className="set-scores">
            <p className="player-score">
                <p className="player1">Player 1</p>
                <p className="sets">
                    {
                        player1GamesWon.map( (gameScore, i) => {
                            if(player1GamesWon[i] > player2GamesWon[i]) {
                                return  <span className="player1-set" style={winnerStyle}>
                                            {gameScore}
                                        </span>
                            }
                            if(player1GamesWon[i] < player2GamesWon[i]) {
                                return  <span className="player1-set">
                                            {gameScore}
                                        </span>
                            }
                            if(player1GamesWon[i] === player2GamesWon[i]) {
                                return  <span className="player1-set">
                                            {gameScore}
                                        </span>
                            }
                        })
                    }
                    
                </p>
            </p>
            <p className="player-score">
                <p className="player2">Player 2</p>
                <p className="sets">
                    {
                        player2GamesWon.map( (gameScore, i) => {
                            if(player2GamesWon[i] > player1GamesWon[i]) {
                                return  <span className="player1-set" style={winnerStyle}>
                                            {gameScore}
                                        </span>
                            }
                            if(player2GamesWon[i] < player1GamesWon[i]) {
                                return  <span className="player1-set">
                                            {gameScore}
                                        </span>
                            }
                            if(player2GamesWon[i] === player1GamesWon[i]) {
                                return  <span className="player1-set">
                                            {gameScore}
                                        </span>
                            }
                        })
                    }
                </p>
            </p>
        </section>
    )
};

export default SetScores;