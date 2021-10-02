import React from 'react'

const ClickCounter = (props) => {

    return (
        <div>
            <h3> Counter : {props.count} </h3>
            <button onClick = {props.increaseCounter}>Increment +1</button>
        </div>
    )
}
export default ClickCounter
