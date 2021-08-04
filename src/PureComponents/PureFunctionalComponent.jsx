import React, {useState} from 'react';
import CustomLabelComponent from './CustomLabelComponent';
function PureFunctionalComponent() {
    const [counter,setCounter] = useState(0);
    const increaseCounter = () =>{
        setCounter(counter+1)
    }
    console.log('in Parent Component')
    return (
        <div>
            <CustomLabelComponent name={`Simple Counter App`} />
            <p>Click Counter : {counter}</p>
            <button onClick={increaseCounter}>Counter+</button>
        </div>
    )
}

export default PureFunctionalComponent;