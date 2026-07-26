import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

// 1: Counter Button --> Increase
// 2: Input field --> Fiboonacci Number

function Fibo(n){
    if(n <= 1)
        return n;

    return Fibo(n-1) + Fibo(n-2);
};


function App(){

    const [count, setCount] = useState(0);
    const [num, setNum] = useState("");


    const fibResult = useMemo(() => Fibo(num), [num]);


    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>

            <div>
                <h2>Fibonacci Number: {fibResult}</h2>
                <input type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);