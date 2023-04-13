import TimeList from "./components/TimeList/TimeList";
import StopWatch from "./components/StopWatch/StopWatch";
import axios from "axios";
import './App.css'
import useTimes from "./hooks/useTimes";

function App() {

    const updateList = () => setStoreTime(!storeTime);
    const {times, error, setError, storeTime, setStoreTime} = useTimes();

    // DELETE FETCH
    const DeleteTime = (id: number) => {
        axios.delete('http://localhost:8080/api/timer/del/' + id)
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
                times={times} onDelete={(id) => DeleteTime(id)}></TimeList>
        </div>
    )
}

export default App
