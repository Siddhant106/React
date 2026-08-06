import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import Add from "./add";


function App() {
    const [language, setLanguage] = useState(['TS', 'JS', 'Java']);

    function handleClick() {
        
        setLanguage(['Cpp', ...language]);
    }

    const VDom = <h1>Hello bhai baad me milte hain</h1>

    const RDom = document.createElement('h1');
    RDom.innerHTML = 'Hello bhai fir aa gye tum yaarr!!!';


    console.log(VDom);
    console.dir(RDom);      // dir -->  directory


    return (
        <>
            <div style={{display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px"}}>
                {
                    language.map((value, index) => <Add key = {value} value = {value}></Add>)
                }
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={handleClick}>Add Language</button>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);