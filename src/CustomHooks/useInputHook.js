/* import React from 'react' */
import { useState } from "react"

const useInputHook = (initialVal) => {
    const [inputVal, setInputVal] = useState(initialVal);
    const resetInputVal = () => {
        setInputVal(initialVal);
    }

    const inputBindersObj = {
        value: inputVal,
        onChange: (e) => {
            setInputVal(e.target.value)
        }
    };
    return [inputVal, inputBindersObj, resetInputVal];
}

export default useInputHook
