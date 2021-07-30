import React,{useState} from 'react'

export default function FunctionalComponent2() {
    const [clickCount,updateCount] = useState(0);
    function  manageCount(clickType) {
        if(clickType === '+'){
            updateCount(clickCount+1);
        }else if(clickType === '-'){
            updateCount(clickCount-1);
        }
    }
    return (
        <div>
            <p>Click Count : {clickCount}</p>
            <button onClick={()=>{manageCount('+')}}>Increase Click Count</button>
            <button onClick={()=>{manageCount('-')}}>Decrease Click Count</button>
        </div>
    )
}
