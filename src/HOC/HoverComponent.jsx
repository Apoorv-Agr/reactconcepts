import React from 'react'
import wrapperComponent from './wrapperComponent';

const HoverComponent = (props) => {
    return (
        <div>
            <p style={{cursor: 'pointer'}} onMouseEnter={props.updateCounter}> {props.name}, Hovered Count is : {props.counter}</p>
        </div>
    )
}
export default wrapperComponent(HoverComponent);