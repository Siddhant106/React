import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";


function StopWatch() {

    const [time, setTime] = useState(0);
    const [isrunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function start() {
        if(!isrunning){
            intervalRef.current = setInterval(() => {
                setTime((prevTime)=>prevTime+1);
            }, 1000);
            setIsRunning(true);
        }
    };

    function stop() {
        if(isrunning){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(true);
        }
    };

    function reset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setIsRunning(false);
    }

    return (
        <div className="stopwatch">
            <h2>⏱ Stopwatch</h2>

            <div className="timer">
                {time.toString().padStart(2, "0")}
            </div>

            <div className="buttons">
                <button className="start" onClick={start}>
                    ▶ Start
                </button>

                <button className="stop" onClick={stop}>
                    ⏸ Stop
                </button>

                <button className="reset" onClick={reset}>
                    ↺ Reset
                </button>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>);