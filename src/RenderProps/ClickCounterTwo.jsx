import React from 'react'

 const ClickCounterTwo = (props) => {
     
    return (
        <div>
            <p>Button is clicked {props.counter} times</p>
            <button onClick={props.increaseCounter}>Click Me</button>
        </div>
    )
}
export default ClickCounterTwo;
