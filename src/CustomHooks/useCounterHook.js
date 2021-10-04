
import { useState } from 'react';

const useCounterHook = (initCount = 0, changeVal = 1) => {
    const [count, setCount] = useState(initCount);
    const increaseCount = () => {
        setCount((prevCount) => (prevCount + changeVal));
    }

    const decreaseCount = () => {
        setCount((prevCount) => (prevCount - changeVal));
    }

    const resetCount = () => {
        setCount(initCount);
    }
    return [count, increaseCount, decreaseCount, resetCount];
}

export default useCounterHook
