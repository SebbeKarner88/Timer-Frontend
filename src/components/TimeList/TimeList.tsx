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
    onDelete: (id: number) => void;
}

const TimeList = ({times, onDelete}: Props) => {

    if (times.length === 0) return null;

    return (
        <div className='row justify-content-center'>
            <table className="  table table-dark numFont table-striped
                                m-3 w-50 border border-2
                                border-opacity-25 border-white ">
                <thead>
                <tr>
                    <th className='text-center' colSpan={2}>TIMES</th>
                </tr>
                </thead>
                <tbody>
                {times.map(time =>
                    <tr key={time.id}
                        className='text-end'>
                        <td>{calcTime(time.time)}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => onDelete(time.id)}
                            >Delete
                            </button>
                        </td>
                    </tr>)}
                </tbody>
                <tfoot className='text-center text-warning'>
                <tr>
                    <td colSpan={2}>TOTAL</td>
                </tr>
                <tr>
                    <td colSpan={2}>{calcTime(times.reduce((acc, currentValue) =>
                        currentValue.time + acc, 0))}</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default TimeList;