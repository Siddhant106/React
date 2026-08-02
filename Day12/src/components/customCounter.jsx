import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "../slicer1";

export default function CustomCounter() {
    
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(CustomIncreaser(Number(number)));
        setNumber("");
    }

    // (type: "slice1/CustomIncreaser", payload (arguments): number)


    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}