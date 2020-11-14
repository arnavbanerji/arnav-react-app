import React from 'react';
import ReactDOM from 'react-dom';

const arnavElement = <h1>This is Arnav</h1>;
console.log(arnavElement);

// above code will compile to this
// const arnavElement = /*#__PURE__*/React.createElement("h1", null, "This is Arnav");

ReactDOM.render(arnavElement, document.getElementById('root'))
//render(element name you want to render, location of DOM where you want to render, root is taken from public/index.html)