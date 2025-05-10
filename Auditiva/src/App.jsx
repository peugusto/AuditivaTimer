import { useEffect, useState } from 'react'
import Pomodoro from './components/Pomodoro'
import ToggleTimer from './components/toggleTimer'
import './App.css'


function App() {
  const [timer,setTimer] = useState(true);
  return (
    <div className={`timer${timer ? ' pomodoro':' timeout'}`}>
    <ToggleTimer setTimer ={setTimer} timer={timer}/>
    <Pomodoro type={timer ? 'timer' : "rest"}/>

    </div>
  )
}

export default App
