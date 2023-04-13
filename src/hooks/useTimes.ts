import {useEffect, useState} from "react";
import axios from "axios";

interface Time {
    id: number,
    time: number
}

const useTimes = () => {

    const [error, setError] = useState('')
    const [times, setTimes] = useState<Time[]>([])
    const [storeTime, setStoreTime] = useState(false);

    // UPDATE FETCH
    useEffect(() => {
        axios.get<Time[]>('http://localhost:8080/api/timer')
            .then(res => {
                setTimes(res.data);
                times.map(time => console.log(time))
            })
            .catch((err) => setError(err.message));
    }, [storeTime])

    return {times, error, setError, storeTime, setStoreTime};
}

export default useTimes;