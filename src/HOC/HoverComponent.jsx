import React from 'react'
import wrapperComponent from './wrapperComponent';

const HoverComponent = (props) => {

   /*  const [counter,setCounter] = useState(0);
    const updateCounter = () =>{
        setCounter(counter+1);
    } */
    return (
        <div>
            <p style={{cursor: 'pointer'}} onMouseEnter={props.updateCounter}> {props.name}, Hovered Count is : {props.counter}</p>
        </div>
    )
}
export default wrapperComponent(HoverComponent);