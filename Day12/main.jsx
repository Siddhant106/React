import React from "react";
import ReactDOM from "react-dom/client";
import stores from "./src/components/store";
import { Provider } from "react-redux";
import Counting from "./src/components/counting";
import CustomCounter from "./src/customCounter";


function App() {
    return (
            <Provider store = {stores}>
                <Counting></Counting>
                <br></br>
                <br></br>
                <br></br>
                <CustomCounter></CustomCounter>
            </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);