import Todo from "./components/Todo";
import Form from "./components/Form";
import React, {useState, useRef, useEffect} from "react";
import {nanoid} from "nanoid";
const axios = require('axios');
const moment = require("moment-timezone");
const apiKey = "c1433cn48v6s4a2e39q0";
const preUrl = "https://finnhub.io/api/v1/quote?symbol=";



function App(props) {
  const [stocks, setStocks] = useState(props.stocks);
  const prevTaskLenght = usePrevious(stocks.length);
  const [timeUpdate, SetTime] = useState("00:00:00 AM");
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
  const apiList = stocks.map(stock=>({apiUrl:`${preUrl}${stock.name}&token=${apiKey}`}));

  useEffect(()=>{
    if (stockList.length-prevTaskLenght ===-1){
      listHeadingRef.current.focus();
    }
  }, [stocks.length, prevTaskLenght]);


  useEffect(()=>{
    
    const promises = apiList.map(api=>axios(api.apiUrl));
    // console.log(promises);
    axios.all(promises).then(axios.spread((...responses)=>{
      const newStocks = stocks.map((stock, index)=>{
        return {...stock, priceInfo:{'pricePre':responses[index].data.pc, 'priceCur':responses[index].data.c}};
      });
      setStocks(newStocks);
      console.log(newStocks);
    })).catch(errors => {
      console.log(errors);
    });
  
  }, [...apiList.map(api=>api.apiUrl)]);




  function deleteTask(id){
    const remainingTasks = stocks.filter(task=> id !== task.id);
    setStocks(remainingTasks);
  }

  function editTask(id, newName){
    const editedTasks=stocks.map(task=>{
      if (id === task.id){
        return {...task, name:newName};
      }
      return task;
    });
    setStocks(editedTasks);
  }

  function addTask(name){
    const newTask = {id:"todo-" + nanoid(), name:name};
    setStocks([...stocks, newTask]);
  }
 
  

  return (
    <div className="todoapp stack-large">
      <h1>Stock Prices</h1>
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
