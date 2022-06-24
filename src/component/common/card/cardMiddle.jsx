import React from 'react';

const CardMiddle = React.memo(({number, unit, goal}) => {
    return(
        <div className="card-middle">
            <span className="card-number">{number}<small>{unit}</small></span>
            <span className="goal-tag">{goal}</span>
        </div>
    );
});

export default CardMiddle;