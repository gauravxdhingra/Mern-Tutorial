import React from 'react';

import './SeasonDisplay.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonProps = {
    summer: { text: 'Summer', iconKey: 'sun' },
    winter: { text: 'Winter', iconKey: 'snowflake' }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconKey } = seasonProps[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconKey} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconKey} icon`}></i>
        </div>
    );
} 

export default SeasonDisplay;