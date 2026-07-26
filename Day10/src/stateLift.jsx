import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./component/increment";
import Decrement from "./component/decrement";


function App() {
        
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Hello Shukla ji</h1>
            <Increment counts={count} setCounts={setCount}/>
            <Decrement counts={count} setCounts={setCount}/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);