const element1 = React.createElement('h1', {id: "first", className: "Rahul", style: {backgroundColor:"pink", fontSize:"30px", color:"darkviolet"}}, "Hello Brooo...");
const element2 = React.createElement('h2', {id: "second", className: "Rahul", style: {backgroundColor:"grey", fontSize:"30px", color:"darkblue"}}, "Badhiya...ekdam");


// <div id="root"> <div> h1, h2 </div> </div>
const div1 = React.createElement('div', {}, [element1, element2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element1);
// root.render(element2);
root.render(div1);



// JSX
/* <div>
    <div>
        <p>
            <h1>Hello</h1>
        </p>
    </div>
</div> */