import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App"
const DATA=[{id:"stock-0", name:"STM", priceInfo:{'pricePre':0, 'priceCur':0}},
{id: "stock-1", name:"TXN", priceInfo:{'pricePre':0, 'priceCur':0}},
{id: "stock-2", name:"AMD", priceInfo:{'pricePre':0, 'priceCur':0}},
{id: "stock-3", name:"MSFT", priceInfo:{'pricePre':0, 'priceCur':0}},
{id: "stock-4", name:"INTC", priceInfo:{'pricePre':0, 'priceCur':0}},
];


ReactDOM.render(

    <App stocks={DATA}/>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
