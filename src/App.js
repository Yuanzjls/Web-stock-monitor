import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, {useState, useRef, useEffect} from "react";
import {nanoid} from "nanoid";

const FILTER_MAP={
  All:()=>true,
  Active: task=>!task.completed,
  completed: task=>task.completed,
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

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
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask}/>));
  const tasksNoun = taskList.length!==1? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  const filterList = FILTER_NAMES.map(name=>(
    <FilterButton key={name} name={name} isPressed={name===filter} setFilter={setFilter}/>
  ));

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

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task=>{
      // if this task has the same ID as the edited task      
        // use object spread to make
        if (id === task.id){
          return {...task, completed: !task.completed};
        }        
       return task;
    });
    setTasks(updatedTasks);    
  }

  function addTask(name){
    const newTask = {id:"todo-" + nanoid(), name:name, completed: false};
    setTasks([...tasks, newTask]);
    // console.log(tasks);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby='list-heading'>
        {taskList}        
      </ul>
    </div> 


  );
}

export default App;
