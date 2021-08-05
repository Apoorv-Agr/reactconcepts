import React from 'react';

const HoverComponentTwo = (props) => {
    return (
        <div>
            <p style={{cursor:'pointer'}} onMouseOver={props.increaseCounter}>Text Hovered {props.counter} Times</p>
        </div>
    )
}

export default HoverComponentTwo
