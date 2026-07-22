import React from "react";
import { useState, useEffect } from "react";


function ColourFull(){

    const [color, setColor] = useState("#29234f");
        
        // useEffect(()=>{}, [])   -->    useEffect(callback function, dependecy)   :   sabse last me execute hoga
        useEffect(() => {
            document.body.style.backgroundColor = color;
        }, [color]);
    
        return (
            <>
                <h1>Background Color Changer</h1>
                <div className="butt">
                    <button style={{backgroundColor:"darkred"}} onClick={() => setColor("darkred")}>DarkRed</button>
                    <button style={{backgroundColor:"cornflowerblue"}} onClick={() => setColor("cornflowerblue")}>CornFlowerBlue</button>
                    <button style={{backgroundColor:"goldenrod"}} onClick={() => setColor("goldenrod")}>Golden</button>
                    <button style={{backgroundColor:"olive"}} onClick={() => setColor("olive")}>Olive</button>
                    <button style={{backgroundColor:"mistyrose"}} onClick={() => setColor("mistyrose")}>MistyRose</button>
                </div>
            </>
        )
}

export default React.memo(ColourFull);