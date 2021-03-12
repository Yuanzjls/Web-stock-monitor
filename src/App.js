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

  useInterval(()=>{fetchData();}, 60000)

  function fetchData() {
    let apiList = stocks.map(stock=>({apiUrl:`${preUrl}${stock.name}&token=${apiKey}`}));
    let promises = apiList.map(api=>axios(api.apiUrl));
    // console.log(stocks);

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
    // console.log(remainingTasks);
  }

  function editTask(id, name){
    let newName = encodeURI(name.toUpperCase().trim());

    if (stocks.map(stock=>stock.name).includes(newName))
    {
      alert(newName + " is already on the watch list");
      return;
    }

    const editedTasks=[...stocks];

    stocks.forEach((task, index) => {
      if (id=== task.id)
      {
        let tmpName = task.name;
        let priceInfo={'pricePre':task.priceInfo.pricePre, 'priceCur':task.priceInfo.priceCur};
        axios.get(`${preUrl}${newName}&token=${apiKey}`)
        .then((response)=>{
          if (response.data.t!==0){      
            tmpName = newName;
            priceInfo={'pricePre':response.data.pc, 'priceCur':response.data.c};
            editedTasks[index].name = newName;
            editedTasks[index].priceInfo = priceInfo;
            console.log(stocks);
            console.log(editedTasks);
            setStocks(editedTasks);
            console.log(priceInfo);
          }
          else{
            alert(name + " does not exist");
          }
        })
        .catch(errors=>{console.log(errors);});

      }
    });
    // setStocks(editedTasks);
    // stocks.map(task=>{
    //   if (id === task.id){
        
        
    //     console.log(priceInfo);
    //     const pullPrice = async ()=>{
    //       let tmpName = task.name;
    //       let priceInfo={'pricePre':task.priceInfo.pricePre, 'priceCur':task.priceInfo.priceCur};
    //       try {
    //         const response = await axios.get(`${preUrl}${newName}&token=${apiKey}`);
    //         console.log(response.data);
    //         if (response.data.t!==0){      
    //           tmpName = newName;
    //           priceInfo={'pricePre':response.data.pc, 'priceCur':response.data.c};
    //           console.log(priceInfo);
    //         }
    //         else{
    //           alert("The "+newName + " is not a stock symbol");
    //         }
    //       }
    //       catch(error){
    //         console.log(error);
    //       }
    //       return {tmpName, priceInfo};
    //     }
    //     const {tmpName, priceInfo} = pullPrice();
    //     console.log(tmpName);
    //     return {...task, name:tmpName, priceInfo:priceInfo};
    //   }
    //   return task;
    // });
    // setStocks(editedTasks);
   
  }

  function addTask(name){
    let newName = encodeURI(name.toUpperCase().trim());
    if (stocks.map(stock=>stock.name).includes(newName))
    {
      alert(newName + " is already on the watch list");
      return;
    }
    axios.get(`${preUrl}${newName}&token=${apiKey}`)
    .then(response=>{
      
      const newTask = {id:"todo-" + nanoid(), name:newName, priceInfo:{'pricePre':response.data.pc, 'priceCur':response.data.c}};
      
      if (response.data.t!==0){      
        setStocks([...stocks, newTask]);
      }
      else{
        alert("The "+newName + " is not a stock symbol");
      }
    })
    .catch(errors=>{console.log(errors)});  
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
