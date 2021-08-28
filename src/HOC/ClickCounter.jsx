import React from 'react';
import wrapperComponent from './wrapperComponent';

const ClickCounter = (props) => {
    
    return (
        <div>
            <p>{props.name}, Button is clicked : {props.counter}</p>
            <button onClick={props.updateCounter}>Increase Counter</button>
        </div>
    )
}
export default wrapperComponent(ClickCounter);