import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./src/home";
import Contact from "./src/contact";
import Dashboard from "./src/dashboard";
import Details from "./src/details";
import Zero from "./src/zero";
import Hello from "./src/hello";
import Hi from "./src/hi";
import Github from "./src/github";


function App(){

    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/details">Details</Link> 
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/details" element={<Details/>}>
                    <Route index element={<Zero/>}></Route>
                    <Route path="hello" element={<Hello/>}></Route>
                    <Route path="hi" element={<Hi/>}></Route>
                </Route>
                <Route path="/github/:name" element={<Github/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);