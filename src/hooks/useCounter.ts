import {useEffect, useState} from "react";


const useCounter = () => {

    const [counter, setCounter] = useState(0);
    const [isCounting, setIsCounting] = useState(false)

    useEffect(() => {
        let interval: any | undefined;
        if (isCounting) {
            interval = setInterval(() => {
                setCounter((counter) => counter + 1);
            }, 1000);
        }
        if (!isCounting) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isCounting]);

    return {counter, setCounter, isCounting, setIsCounting};
}

export default useCounter;