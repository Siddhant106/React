const element = React.createElement('h1', {}, "Hello Brooo...");

// ReactDOM.render(element, document.getElementById('root'));       --> In React 17 and backwards

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);