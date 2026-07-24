import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


function GithubProfile(){

    return (
        <>
            <Header></Header>
            <Body></Body>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);