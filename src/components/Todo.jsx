import React, {useEffect ,useRef, useState} from "react";

export default function Todo(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [hidden, setHidden] = useState(true);
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);
    const priceChange = props.priceInfo.priceCur-props.priceInfo.pricePre;
    const priceChangePercentage = Math.abs(priceChange / props.priceInfo.pricePre * 100);

    function usePrevious(value){
        const ref=useRef();
        useEffect(()=>{
            ref.current = value;
        });
        return ref.current;
    }

    function mouserOver(){
        setHidden(false);
        console.log("Over");
    }
    function mouseOut(){
        setHidden(true);
        console.log("Out");
    }

    useEffect(()=>{
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);    
    
    const editingTemplate = (
        <form className="stack-small" onSubmit={(e)=>{e.preventDefault(); props.editTask(props.id, newName); setNewName(""); setEditing(false)}} ref={editFieldRef}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    Input a stock name:
                </label>
                <input id={props.id} className="todo-text" type="text" value={newName} onChange={e=>{setNewName(e.target.value);}}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={()=>{setEditing(false);}}>
                    Cancel
                    <span className="visually-hidden">Input a stock name:</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">Input a stock name:</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate=(
    <div className="stack-small" onMouseOver={mouserOver} onMouseOut={mouseOut}>
    <div className="c-cb"  >       
        <div className="stock-container">
            <label className="todo-label" htmlFor={props.id}>
                {props.name}
            </label> 
            <div>      
                <span className="stock-price">{props.priceInfo.priceCur}</span><br/>
                <span className="stock-price" style={{color:priceChange>0?"green":"red"}}>{priceChange>0?"+":""}{Number(priceChange).toFixed(2)} ({Number(priceChangePercentage).toFixed(2)}%)<br/></span>
            </div>  
        </div>
    </div>
    <div className="btn-group"  style={{display: hidden?"none":""}}>
        <button type="button" className="btn" onClick={()=>setEditing(true)} ref={editButtonRef}>
            Edit <span className="visually-hidden">{props.name} </span>
        </button>
        <button type="button" className="btn btn__danger" onClick={()=>{props.deleteTask(props.id)}}>
            Delete <span className="visually-hidden">{props.name}</span>
        </button>
    </div>
    </div>
);


    return(
        <li className="todo">{isEditing? editingTemplate: viewTemplate}</li>
    );
}