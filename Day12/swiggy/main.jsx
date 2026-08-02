import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./header";
import Card from "./card";
import stores from "./store";


function App() {
    
    return (
        <Provider store={stores}>
            <Header></Header>
            <Card></Card>
        </Provider>
    )
}
import stores from "./store";


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);