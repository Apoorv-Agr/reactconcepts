import React from 'react'

function FunctionalComponent3(props) {
    console.log('props :',props);
    return (
        <div>
            <h1>Third Functional Component</h1>
            <p>Props from parent component : {props.data.name}</p>
            <button onClick={props.data.updateNameBtnHandler}>Update Name</button>
            <button onClick={props.data.resetBtnHandler}>Reset Name</button>
        </div>
    )
}

export default FunctionalComponent3
