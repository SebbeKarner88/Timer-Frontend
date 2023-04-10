import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './StopWatch.css'
import {calcTime} from "../../App";

interface Props {
    SaveTime: (id: number, time: number) => void;
}

const StopWatch = ({SaveTime}: Props) => {

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

    return (
        <>
            <div className='row justify-content-center mt-2'>
                <h1 className='text-center numFont text-opacity-75'>{calcTime(counter)}</h1>
            </div>
            <div>
                <div className='text-center mt-2'>
                    {isCounting ?
                        <button onClick={() => setIsCounting(false)}
                                className='btn btn-outline-danger numFont opacity-75 m-3 buttonSize'>STOP</button> :
                        <button onClick={() => setIsCounting(true)}
                                className='btn btn-outline-success numFont opacity-75 m-3 buttonSize'>START</button>
                    }
                    <button className='btn btn-outline-warning numFont opacity-75 m-3 buttonSize'
                            onClick={() => setCounter(0)}>RESET
                    </button>

                    <button className='btn btn-outline-primary numFont opacity-75 m-3 buttonSize'
                            onClick={() => {
                                SaveTime(0, counter);
                                setCounter(0)
                            }}>SAVE
                    </button>
                </div>
            </div>
        </>
    );
}

export default StopWatch;