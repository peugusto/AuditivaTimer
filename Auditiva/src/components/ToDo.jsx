import { useReducer, useState } from "react";

const ToDo = ({setTasksDone,state,dispatch}) =>{

    const [valueInput, setValueInput] = useState("");

    
    return(
        <div className="ToDo">
            <h2><i className="fa-solid fa-list-check"></i> Tasks List </h2>
            {/* <button className="btnTodo" onClick={() => setTasks(true)}><i className="fa-solid fa-plus"></i>Add Task</button> */}
            <input type="text" value = {valueInput} placeholder="..." onChange={(e) => setValueInput(e.target.value)}/> 
            <button onClick={() => {
             if (valueInput.trim() !== "") dispatch({ type: 'add', payload: valueInput }), setValueInput("");
            }}>add</button>
            <ul>
            {state.tarefas.map((data, index) => (
                <div className="lista"><li key={index}><button onClick={() => setTasksDone(prev => prev + 1)}><i class="fa-solid fa-check"></i></button>{data}</li></div>
            ))}
            </ul>
        
        </div>
    )
}

export default ToDo;