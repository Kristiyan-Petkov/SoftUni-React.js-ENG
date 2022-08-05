var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// NATIVE REACT
// const reactElement = React.createElement(
//     'header',
//     {className: 'site-header'},
//     React.createElement('h1', {}, 'Hello from React!!!'),
//     React.createElement('h2', {}, 'React slogan'),
// );


// JSX
var reactElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "H1 React element"
    ),
    React.createElement(
        "h2",
        null,
        "H2 React element"
    )
);

root.render(reactElement);