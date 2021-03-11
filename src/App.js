import Todo from "./components/Todo";
import Form from "./components/Form";
import React, {useState, useRef, useEffect} from "react";
import {nanoid} from "nanoid";
// import useInterval from 'react-useinterval';

const axios = require('axios');
const moment = require("moment-timezone");
const apiKey = "c1433cn48v6s4a2e39q0";
const preUrl = "https://finnhub.io/api/v1/quote?symbol=";



function App(props) {
  const [stocks, setStocks] = useState(props.stocks);
  const prevTaskLenght = usePrevious(stocks.length);
  const [timeUpdate, SetTime] = useState(moment().format('LT'));
  const [active, SetActive] = useState(false);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(()=>{
      ref.current = value;
    });
    return ref.current;
  }
  const listHeadingRef = useRef(null);
  const stockList = stocks.map(stock => (<Todo id={stock.id} name={stock.name} key={stock.id}  deleteTask={deleteTask} editTask={editTask}
  priceInfo={stock.priceInfo}/>));
  const tasksNoun = stockList.length!==1? 'stocks' : 'stock';
  const headingText = `${stockList.length} ${tasksNoun}`;
  

  useEffect(()=>{
    if (stockList.length-prevTaskLenght ===-1){
      listHeadingRef.current.focus();
    }
  }, [stockList.length, prevTaskLenght]);

  useInterval(()=>{fetchData();}, 10000)

  function fetchData() {
    let apiList = stocks.map(stock=>({apiUrl:`${preUrl}${stock.name}&token=${apiKey}`}));
    let promises = apiList.map(api=>axios(api.apiUrl));
    console.log(stocks);

    axios.all(promises).then(axios.spread((...responses)=>{
      const newStocks = stocks.map((stock, index)=>{
        return {...stock, priceInfo:{'pricePre':responses[index].data.pc, 'priceCur':responses[index].data.c}};
      });
      setStocks(newStocks);
      SetTime(moment().format('LT'));
      
    })).catch(errors => {
      console.log(errors);
    });
  } 

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      fetchData();

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }
  





  function deleteTask(id){
    const remainingTasks = stocks.filter(task=> id !== task.id);
    setStocks(remainingTasks);
    console.log(remainingTasks);
    // SetActive(!active);
  }

  function editTask(id, newName){
    const editedTasks=stocks.map(task=>{
      if (id === task.id){
        return {...task, name:newName};
      }
      return task;
    });
    setStocks(editedTasks);
    // SetActive(!active);
  }

  function addTask(name){
    const newTask = {id:"todo-" + nanoid(), name:name, priceInfo:{'pricePre':0, 'priceCur':0}};
    setStocks([...stocks, newTask]);
    // SetActive(active);
  }
 
  

  return (
    <div className="todoapp stack-large">
      <h1>Stock Prices</h1>
        <p style={{textAlign:"center"}}>Update at {timeUpdate}</p>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby='list-heading'>
        {stockList}        
      </ul>
    </div> 


  );
}

export default App;
