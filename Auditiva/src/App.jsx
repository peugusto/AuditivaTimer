import { useEffect, useState , useReducer} from 'react'
import Pomodoro from './components/Pomodoro'
import ToggleTimer from './components/toggleTimer'
import TopBar from './components/TopBar'
import './App.css'
import ToDo from './components/ToDo'
import Joyride from 'react-joyride';


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
  const [timer,setTimer] = useState(true);
  const [tasksDone, setTasksDone] = useState(0);
  const [state, dispatch] = useReducer(reducer, {tarefas: [], count: 0})
  const [run, setRun] = useState(true);

  const steps = [
  {
    target: '.timer',
    content: 'Este é o timer, ele permite que você gerencie seu tempo de foco e descanso de maneira eficiente.',
  }, 
  {
    target: '.TopBar',
    content: 'A TopBar exibe o número de tarefas concluídas, ajudando a visualizar seu desempenho.',
  },
  {
    target: '.ToDo',
    content: 'Aqui está a sua lista de tarefas. Você pode adicionar novos itens e marcar como concluídos à medida que avança.',
  },
];

  return (
    <>
    <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        showProgress
      />
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
