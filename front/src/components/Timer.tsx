import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 0) {
                    return 15 * 60;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return <span>{formatTime(timeLeft)}</span>;
};

export default Timer;