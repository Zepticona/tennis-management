import React from 'react';

const Duration = (props) => {
    const timeString = props.timeElapsed;

    return (
        <section className="duration">
            <span className="duration__type">Duration of play:</span>
            <span className="duration__time">
                {
                    // timeString.length === 0 ? '00:00:00' :
                    // timeString.split(':').map( (timeElement, i) => `${timeElement}${i < 2 ? ':' : ''}`)
                }
            </span>
        </section>
    )
};

export default Duration;