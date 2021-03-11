import Todo from "./components/Todo";
import Form from "./components/Form";
import React, {useState, useRef, useEffect} from "react";
import {nanoid} from "nanoid";
const axios = require('axios');

// const FILTER_MAP={
//   All:()=>true,
//   Active: task=>!task.completed,
//   completed: task=>task.completed,
// }
// const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  const prevTaskLenght = usePrevious(tasks.length);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(()=>{
      ref.current = value;
    });
    return ref.current;
  }
  const listHeadingRef = useRef(null);
  const taskList = tasks.map(task => (<Todo id={task.id} name={task.name} key={task.id}  deleteTask={deleteTask} editTask={editTask}/>));
  const tasksNoun = taskList.length!==1? 'stocks' : 'stock';
  const headingText = `${taskList.length} ${tasksNoun}`;

  useEffect(()=>{
    if (taskList.length-prevTaskLenght ===-1){
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLenght]);
  function deleteTask(id){
    const remainingTasks = tasks.filter(task=> id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName){
    const editedTasks=tasks.map(task=>{
      if (id === task.id){
        return {...task, name:newName};
      }
      return task;
    });
    setTasks(editedTasks);
  }



  function addTask(name){
    const newTask = {id:"todo-" + nanoid(), name:name};
    setTasks([...tasks, newTask]);
  }
 
  

  return (
    <div className="todoapp stack-large">
      <h1>Stock Prices</h1>
        <p className="label__lg">Update at 2021-03-11</p>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby='list-heading'>
        {taskList}        
      </ul>
    </div> 


  );
}

export default App;
