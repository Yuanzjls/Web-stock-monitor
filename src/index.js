import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App"
const DATA=[{id:"todo-0", name:"STM"},
{id: "todo-1", name:"TXN"},
// {id: "todo-2", name:"AMD"},
// {id: "todo-3", name:"MSFT"},
// {id: "todo-4", name:"INTC"},
];


ReactDOM.render(

    <App tasks={DATA}/>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
