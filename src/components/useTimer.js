import { useState, useEffect } from 'react'

const useTimer = ({duration}) => {
    const[seconds, setSeconds] = useState(duration);

    useEffect(() => {
        if (seconds > 0) {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);      
        }, 1000);
        return () => {
            clearInterval(interval);
        }
        }
    }, [seconds]);

    return {
        seconds
    }
}

export default useTimer