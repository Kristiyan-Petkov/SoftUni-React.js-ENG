const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

//REACT NATIVE
//const reactElement = React.createElement(
//     'header',
//     {className: 'site-header'},
//     React.createElement('h1', {}, 'Hello from React!!!'),
//     React.createElement('h2', {}, 'React slogan'),
// );


// JSX
const reactElement = (
    <header className="site-header">
        <h1>Hello from JSX</h1>
        <h2>React.js</h2>
    </header>
);

root.render(reactElement)