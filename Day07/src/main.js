import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ColourFull from "./Components/backgroundChanger";


// BAckground Color Changing

function Main() {
    
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="counter">
                <h1>Counter: {count}</h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            </div>

            <ColourFull/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);