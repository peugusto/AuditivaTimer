import { useReducer, useState } from "react";

const ToDo = ({ setTasksDone, state, dispatch }) => {
  const [valueInput, setValueInput] = useState("");
  const [doneTasks, setDoneTasks] = useState({}); 
  
  return (
    <div className="ToDo">
      <h2><i className="fa-solid fa-list-check"></i> Tasks List </h2>
      <input
        type="text"
        value={valueInput}
        placeholder="..."
        onChange={(e) => setValueInput(e.target.value)}
        maxlength="20"
      />
      <button
        onClick={() => { if (valueInput.trim() !== "")  dispatch({ type: 'add', payload: valueInput }), setValueInput("");}} id="btnADD">
        <i className="fa-solid fa-plus" id="icon"></i>
      </button>
      <ul className="taskList">
        {state.tarefas.map((data, index) => (
          <div className={`lista ${doneTasks[index] && 'done'}`} key={index}>
            <li>
              <button
                onClick={() => {
                  setDoneTasks((prev) => ({ ...prev, [index]: true }));
                  setTasksDone((prev) => prev + 1);
                }}
                disabled={doneTasks[index]}>
              <i className="fa-solid fa-check"></i>
              </button>
              {data}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
