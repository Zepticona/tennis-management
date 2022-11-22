import Intervals from './matchComponents/Intervals';
// import Correction from './matchComponents/Correction';
// import Duration from './matchComponents/Duration';
// import Faults from './matchComponents/Faults';
// import GameScore from './matchComponents/GameScore';
// import PauseMatch from './matchComponents/PauseMatch';
// import PlayerNames from './matchComponents/PlayerNames';
// import SetScores from './matchComponents/SetScores';
// import Undo from './matchComponents/Undo';

function MatchPage() {
    return ( 
        <main>
            <div className="umpire-page-container umpire-page--lite">
                {/* <Intervals changeOverHandler={props.handleChangeOver} isChangingOver={props.isChangingOver} showTime={props.showTime} /> */}
                <Intervals />
                {/* <Duration  />
                <GameScore player1Point={props.gamePoint1} player2Point={props.gamePoint2} server={props.server} isPlayer1OnLeft={props.isPlayer1OnLeft} />
                <PlayerNames isPlayer1OnLeft={props.isPlayer1OnLeft} server={props.server} player1={props.player1} player2={props.player2} />
                <Faults aceHandler={props.handleAce} netHandler={props.handleNet} />
                <Undo />
                <SetScores sets={props.sets} player1={props.player1} player2={props.player2} />
                <PauseMatch />
                <Correction /> */}
            </div>
        </main>
     );
}

export default MatchPage;