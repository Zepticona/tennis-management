import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { changeOver } from '../../reducers/tournamentReducer';

const Intervals = (props) => {
    // const dispatch = useDispatch();
    const [isChangingOver, setIsChangingOver] = useState(false);
    const [intervalId, setInvervalId] = useState(null);
    const [timer, setTimer] = useState(5);
    const timerRef = useRef(timer)
    let scalingClass = null;
    let scalingClassTime = null;
    // if()
    if(props.showTime) {
        scalingClassTime = 'scaleToMax';
    }
    if(props.isChangingOver) {
        scalingClass = 'scaleToMax';
    }
    // console.log(isChangingOver);
    const changeOver = useCallback(() => {
        const interval = setInterval(() => {
            console.log('Countdown');
            setTimer(state => state - 1)
        }, 1000);
        setInvervalId(interval);
    }, [])
    
    useEffect(() => {   
        if(timer <=0) {
            console.log('Clearing timer...')
            clearInterval(intervalId);
        }
    }, [timer]);
    // }, [isChangingOver]);
    let style;
    const removeTimeOutWarning = () => {
        style = {
            display: 'none'
        }
    }
    
    return (
        <section className="intervals">
            <div className="intervals__row">
                <button className="match-btn--small grey-btn" onClick={changeOver} >Change Over {timer}</button>
                <button className="match-btn--small grey-btn">Set Pause</button>
                <button className="match-btn--small grey-btn">Medical Timeout</button>
                <button className="match-btn--small grey-btn btn4">10min Pause</button>
                <span className={`selected-btn ${scalingClass}`}>Change Over: {timer}</span>
                <span onClick={removeTimeOutWarning} className={`selected-btn ${scalingClassTime}`} style={style}>TIME!</span>
            </div>
            <div className="intervals__row">
                <button className="match-btn--medium grey-btn">Shot Clock</button>
                <button className="match-btn--medium grey-btn">Net/Radar</button>
            </div>
        </section>
    )
};

export default Intervals;