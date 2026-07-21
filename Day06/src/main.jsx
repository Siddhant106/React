import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {

    const [Password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberChanged, setNumberChanged] = useState(false);
    const [charChanged, setCharChanged] = useState(false);

    const generatePassword = useCallback(() => {
        let str = "abcdefghijklmnopqrxyzABCDEFGHIJKLMNOPQRXYZ";
        if(numberChanged)
            str +="0123456789";
        if(charChanged)
            str += "+-*/!@#$%^&(){}[]:;`></?~";
        
        let pass = "";
        
        for(let i=0; i<length; i++){
            pass += str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass);
    }, [length, charChanged, numberChanged]);

    
    useEffect(()=>{
        generatePassword();
    }, [generatePassword]);


    return(
        <>
            <h1>{Password}</h1>
            <div className="second">
                <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)}></input>
                <label>Length: {length}</label>

                <input type="checkbox" defaultChecked={numberChanged} onChange={() => setNumberChanged(!numberChanged)}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={charChanged} onChange={() => setCharChanged(!charChanged)}></input>
                <label>Character</label>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);