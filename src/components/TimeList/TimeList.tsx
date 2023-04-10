import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {calcTime} from "../../App";
import './TimeList.css'

interface Time {
    id: number,
    time: number
}

interface Props {
    times: Time[],
    onDelete: (id: number, time: number) => void;
}

const TimeList = ({times, onDelete}: Props) => {

    if (times.length === 0) return null;

    return (
        <div className='row justify-content-center'>
            <table className="  table table-dark table-responsive numFont
                                table-striped m-3 w-50 border border-2
                                border-opacity-25 border-white ">
                <thead>
                <tr>
                    <th className='text-center' colSpan={2}>Time</th>
                </tr>
                </thead>
                <tbody>
                {times.map(time =>
                    <tr key={time.id} className='text-center'>
                        <td>{calcTime(time.time)}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => onDelete(time.id, time.time)}
                            >Delete
                            </button>
                        </td>
                    </tr>)}
                </tbody>
                <tfoot>
                <tr className='text-center'>
                    <td>{calcTime(times.reduce((acc, currentValue) =>
                        currentValue.time + acc, 0))}
                    </td>
                    <td>Total</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default TimeList;