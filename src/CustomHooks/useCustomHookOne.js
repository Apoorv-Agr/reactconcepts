import { useEffect } from "react";

const useCustomHookOne = (count) => {
    useEffect(() => {
        document.title = `Count ---> ${count}`;
    }, [count])
}

export default useCustomHookOne;
