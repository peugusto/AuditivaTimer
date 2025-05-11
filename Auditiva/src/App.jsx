import { useEffect, useState , useReducer} from 'react'
import Pomodoro from './components/Pomodoro'
import ToggleTimer from './components/toggleTimer'
import TopBar from './components/TopBar'
import './App.css'
import ToDo from './components/ToDo'

function reducer(state,action){
    switch(action.type){
        case 'add':
            return{
                ...state,
                tarefas: [...state.tarefas, action.payload],
                count: state.count + 1
            }
        default:
            return state;
    }
}
function App() {
  const [timer,setTimer] = useState(null);
  const [tasksDone, setTasksDone] = useState(0);
  const [state, dispatch] = useReducer(reducer, {tarefas: [], count: 0})

  return (
    <>
    <div className='content'>
    <ToDo setTasksDone={setTasksDone} state={state} dispatch={dispatch}/>
    <div className='contentBlock'>
    <TopBar timer={timer} tasksDone={tasksDone} state={state}/>
    <div className={`timer${timer ? ' pomodoro':' timeout'}`}>
    <ToggleTimer setTimer ={setTimer} timer={timer}/>
    <Pomodoro type={timer ? 'timer' : "rest"}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
