import { useEffect, useState } from 'react';


export const Loader = () => {
    const [percents, setPercents] = useState(0);

    useEffect(() => {
        const speedLoadingInterval = setInterval(() => {
            setPercents(prev => {
                if (prev === 95) {
                    clearInterval(speedLoadingInterval);

                    return prev;
                } else {
                    return prev + 1;
                }
            });
        }, 250);
    }, [])

    return (
        <div className='loader'>
            <div className='loader__caption'>Generating Design {percents}%</div>
            <div className='loader__line'>
                <span style={{ width: `${percents}%` }} className='loader__progress'></span>
            </div>
        </div>
    )
}