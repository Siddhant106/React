import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./component/second";
import GlobalContext from "./component/global";
import { useContext } from "react";
import Fourth from "./component/fourth";


function App() {
        
    const [count, setCount] = useState(10);

    return (
        <>
            {/* <GlobalContext.Provider value={{counts: count, setCounts: setCount}}> */}
            <Fourth/>
            <GlobalContext.Provider value={{count,setCount}}>
                <h1>Hello Shukla ji</h1>
                <Second/>
            </GlobalContext.Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);