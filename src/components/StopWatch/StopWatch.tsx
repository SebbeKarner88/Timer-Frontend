import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './StopWatch.css'
import {calcTime} from '../../functions/CalcTime'
import useCounter from "../../hooks/useCounter";

interface Props {
    SaveTime: (id: number, time: number) => void;
}

const StopWatch = ({SaveTime}: Props) => {

   const {counter, setCounter, isCounting, setIsCounting} = useCounter();

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