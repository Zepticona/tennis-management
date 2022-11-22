import React from 'react';
import { ScoreHandler } from '../../shared/utils/scoreHandler';

const Faults = (props) => {
    return (
        <section className="faults">
            <button className="match-btn--small faults-btn" onClick={props.aceHandler}>AS</button>
            <button className="match-btn--small faults-btn faults-btn--active" onClick={props.netHandler}>Net</button>
            <button className="match-btn--small faults-btn faults-btn--active" onClick={() => props.faultHandler('F-FF')}>Foot Fault</button>
            <button className="match-btn--small faults-btn faults-btn--active" onClick={() => props.faultHandler('F')}>Fault</button>
            <button className="match-btn--small faults-btn" onClick={() => props.faultHandler('F-DF')}>Double Fault</button>
        </section>
    )
};

export default Faults;