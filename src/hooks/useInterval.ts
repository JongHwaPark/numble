import React, { useEffect, useRef } from 'react';


const useInterval = (callback: any, delay: number) => {
    const savedCallback = useRef<typeof callback>();
    let timer: any;
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            timer = setInterval(tick, delay);
            return () => clearInterval(timer);
        }
    }, [delay]);
    return timer;
}

export default useInterval;