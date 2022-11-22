import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MatchSetupPage(props) {
    const [matchState, setMatchState] = useState({
        match: '',
        isPlayer1OnLeft: true,
        isPlayer1Serving: true,
        matchType: '',
        scoreboard: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        let value = e.target.value;
        if(e.target.value === 'true')  {
            value = true;
        } else if(e.target.value === 'false') {
            value = false;
        }
        setMatchState((state) => ({
            ...state,
            [e.target.name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/match")
    }


    return ( 
        <main>
            <form onSubmit={handleSubmit}>
            <div className="umpire-page-container umpire-page--lite match-setup-container">
                <div>
                    {/* <label for="cars">Choose a car:</label> */}
                    <select required defaultValue="" onChange={handleChange} id="cars" name="match" className='match-select'>
                    <option value="" disabled>Chose Match</option>
                        {props.matches.map((match, i) => {
                            return <option value={match} key={i}>{match}</option>
                        })}
                    </select>
                </div>  
                <div>
                    <div className='match-setup__player'>
                        <span>Player 1</span>
                        <p className='info--gray-btn'>Roger Federrer</p>
                        <div>
                            <div className='match-setup__player-position'>
                                <span>Position</span>
                                <input required onChange={handleChange} type="radio" name="isPlayer1OnLeft" id="left" value={true} />
                                <label htmlFor='left'>L</label>
                                <input required onChange={handleChange} type="radio" name="isPlayer1OnLeft" id="right" value={false} />
                                <label htmlFor='Right'>R</label>
                            </div>
                            <div className='match-setup__first-server'>
                                <span>First Serve</span>
                                <input required onChange={handleChange} type="radio" name="isPlayer1Serving" id="yes" value={true}  />
                                <label htmlFor='yes'>Y</label>
                                <input required onChange={handleChange} type="radio" name="isPlayer1Serving" id="no" value={false} />
                                <label htmlFor='no'>N</label>
                            </div>
                        </div>
                    </div>
                    <div className='match-setup__player'>
                        <span>Player 2</span>
                        <p className='info--gray-btn'>Rafa Nadal</p>
                    </div>
                </div>
                <div >
                    <label htmlFor="match-type">Type of a Game</label>
                    <select required defaultValue="" onChange={handleChange} id="match-type" name="match-type" className='match-select'>
                        <option value="" disabled>Chose Game Type</option>
                        {props.matchTypes.map((match, i) => {
                            return <option value={match} key={i}>{match}</option>
                        })}
                    </select>
                </div>  
                <div >
                    <label htmlFor="scoreboard">Choose Scoreboard</label>
                    <select required defaultValue="" onChange={handleChange} id="scoreboard" name="scoreboard" className='match-select'>
                    <option value="" disabled>Select Scoreboard</option>
                        {props.scoreboards.map((board, i) => {
                            return <option value={board} key={i}>{board}</option>
                        })}                        
                    </select>
                </div>  
                
                <button type='submit' className="primary-btn btn-blue btn--centered">Start Warmup</button>
            </div>
            </form>
        </main>
     );
}

export default MatchSetupPage;

MatchSetupPage.prototype = {
    matches: PropTypes.array.isRequired,
    scoreboards: PropTypes.array.isRequired,
    matchTypes: PropTypes.array.isRequired
}

MatchSetupPage.defaultProps = {
    // Matches are like Australian Open, Mens Singles, Round 1, Match number 01. Relevant Match information like player names, court, etc. maybe be fetched from API using this
    matches: ['AO-M-S-R1-M01', 'AO-M-S-R2-M02'],
    scoreboards: ['Board1', 'Board2'],
    // Rules for each match type may be stored locally and imported when when needed.
    matchTypes: ['TieBreakAllSets', 'TieBreakAllSetsANDFinalSetMatchTieBreak'],

}