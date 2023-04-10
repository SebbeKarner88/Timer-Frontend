import TimeList from "./components/TimeList/TimeList";
import StopWatch from "./components/StopWatch/StopWatch";
import {useEffect, useState} from "react";
import axios from "axios";
import './App.css'


interface Time {
    id: number,
    time: number
}

export const calcTime = (time: number) => {

    const totalMin = Math.floor(time / 60);
    const sec = time % 60;
    const hrs = Math.floor(totalMin / 60);
    const min = totalMin % 60;

    if (hrs < 1 && min < 1) return sec + ' s';
    if (hrs < 1) return  min + ' m  :  ' + sec + ' s';
    return hrs + ' h  :  ' + min + ' m  :  ' + sec + ' s';
}

function App() {

    const [error, setError] = useState('')
    const [times, setTimes] = useState<Time[]>([])
    const [storeTime, setStoreTime] = useState(false);
    const updateList = () => setStoreTime(!storeTime);

    // UPDATE FETCH
    useEffect(() => {
        axios.get<Time[]>('http://localhost:8080/api/timer')
            .then(res => {
                setTimes(res.data);
                times.map(time => console.log(time))
            })
            .catch((err) => setError(err.message));
    }, [storeTime])

    // DELETE FETCH
    const DeleteTime = (id: number, time: number) => {

        axios.post('http://localhost:8080/api/timer/del', {id, time})
            .then(() => updateList())
            .catch((err) => setError(err.message));
    }
    // SAVE FETCH
    const SaveTime = (id: number, time: number) => {

        axios.post('http://localhost:8080/api/timer', {id, time})
            .then(() => updateList())
            .catch((err) => setError(err.message));
    }

    return (
        <div>
            {error && <p className='text-danger text-center'>Could not complete Request <br/>|| {error} || <br/><br/>PLEASE
                RELOAD PAGE</p>}
            <StopWatch SaveTime={(id, time) => SaveTime(id, time)}></StopWatch>
            <br/>
            <TimeList
                times={times} onDelete={(id, time) => DeleteTime(id, time)}></TimeList>
        </div>
    )
}

export default App
