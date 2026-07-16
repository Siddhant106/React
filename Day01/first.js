// Create element through JS

// const { createElement } = require("react");


// Method:2  -->  Makinng element
const React = {
    createElement: function(tag, styles, children){
        const element = document.createElement(tag);
        
        for(let key in styles){
            element.style[key] = styles[key];
        }

        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        } 
        else
        element.innerHTML = children;
        
        return element;
    }
}
const header3 = React.createElement('h1', {fontSize:"30px", backgroundColor:"pink", color:"brown"}, "Hello kaise hain sab!");
const header4 = React.createElement('h2', {fontSize:"25px", backgroundColor:"powderblue", color:"darkred"}, "Badhiya sab...");

// Method:1 --> Making element
// const header1 = document.createElement('h1');
// header1.innerHTML = "Hello kaise hain sab!";
// header1.style.backgroundColor = "pink";
// header1.style.fontSize = "30px";
// header1.style.color = "brown";

// const header2 = document.createElement('h2');
// header2.innerHTML = "Badhiya sab...";
// header2.style.backgroundColor = "powderblue";
// header2.style.fontSize = "25px";
// header2.style.color = "darkred";

// const root = document.getElementById("root");
// // root.append(header1);
// // root.append(header2);
// root.append(header3);
// root.append(header4);


// DOM Manipulation
const ReactDOM = {
    render: function(element, root){
        root.append(element);
    }
}
ReactDOM.render(header3, document.getElementById('root'));
ReactDOM.render(header4, document.getElementById('root'));


// Creating unordered list
const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JS");
const UL = React.createElement('ul', {fontSize:"20px", backgroundColor:"coral", color:"darkblue"}, [li1, li2, li3]);

ReactDOM.render(UL, document.getElementById('root'));

