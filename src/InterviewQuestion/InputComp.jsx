import React from 'react'

const InputComp = React.forwardRef(({inputVal, onInputChange,getCityVal},ref) => {
    return (
        <div>
            <input type="text" value={inputVal} onChange={onInputChange} ref={ref}/>
            <button onClick={getCityVal}>Add City</button>
        </div>
    )
}); 

export default InputComp
