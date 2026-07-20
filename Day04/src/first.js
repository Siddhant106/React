import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Mukesh babu</h1>

// JSX: JS expression
// JSX: JS statement (not allowed) 
function Greet(props) {
    return <h2>Badhiya {props.name} sahab aapkki age tohh {props.age}</h2>
};
//  JSX curly braces ek slot hai jisme tum JS ka result inject karte ho, aur result hamesha ek value (expression ka output) hona chahiye, na ki pura statement block.
// Result produce hona chahiye : Array, String, Number          [Object-->Not allowed]
const element2 = <Greet name='Sonam Verma' age='54'/>
// JSX Rule: Har function ka first letter capital kroge toh uss function ko JSX style me khud ka tag bana k bhi call kar skte ho 
// inside JSX functions there is object of parameters called 'props':-
/* props = {
        name: "Sonam",
        age: "54"    
    }
*/ 

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(element1);
Root.render(Greet("Mukun"));