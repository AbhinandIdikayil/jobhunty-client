import { useEffect, useState } from 'react'

function Timer({ initialSeconds, onExpire }:{initialSeconds:number,onExpire:() => void}) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            onExpire();
        }
    }, [seconds, onExpire]);

    const formatTime = (seconds:number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div>
            <p className='text-gray-800 font-bold leading-10 text-center'>Time remaining: {formatTime(seconds)}</p>
        </div>
    );
}

export default Timer