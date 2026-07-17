import React from "react";
import ReactDOM from "react-dom/client";

// JSX:- Javascript XML
/* <div>
    <div>
        <p>
            <h1>Hello</h1>
        </p>
    </div>
</div> */


//                      React                       Render
// React.createElement() => react element(JS_object) => HTML Element


const newElement = <h1>Hello Mahesh Babu</h1>;
//    babel:Transpiler                    React                       Render
// JSX => React.createElement() => react element(JS_object) => HTML Element


// JSX :- JS ke expressions bhi add kar sakte hain
const name = "Fungi";
const obj = {
    age: 34,
    salary: 3442
}

const obj1 = {
    backgroundColor: "powderblue",
    color: "darkblue",
    fontSize: "30px"
}

// React Element
const nextElement = (
    <>
        <h1 id="first" className="header">Aur kya haal chaal {name}</h1>
        <h2 style={obj1}>Meri age {obj.age} hai</h2>
        <h3 style={{backgroundColor: "beige",color: "crimson ",fontSize: "30px"}}>Baaki Majee me huuuu</h3>
    </>
)


// React Component:-
// 1) Class based element           -->  Olde way (not used)
// 2) Funtion based element

function greet(){
    return <h4>Accha thik</h4>
};
const newElement1 = greet();

const meet = ()=>{
    return <h5>Mera bhi sab Accha haiii</h5>
}
const newElement2 = meet();
// const newElement3 = <>{newElement1} {newElement2}</>
const newElement3 = <>{greet()} {meet()}</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement);
root.render(nextElement);
// root.render(newElement1);
// root.render(meet());
// root.render(<>{greet()} {meet()}</>);
root.render(newElement3);