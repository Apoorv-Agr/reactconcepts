import React, {useState} from 'react';

const wrapperComponent = (OriginalComponent) => {    
    const NewComponent = (props) => {
        const [counter,setCounter] = useState(0);
        const increaseCounter = () =>{
            setCounter(counter+1)
        }
        return (
            <div>
                <OriginalComponent counter={counter} updateCounter={increaseCounter} {...props}/>
            </div>
        );
        
    }
    return NewComponent;
}

export default wrapperComponent;