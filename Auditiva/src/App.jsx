import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(59);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if(isActive){
      const timer = setInterval(() =>{
        setCount((prevCount) => {
          prevCount - 1
        })
      },1000)

      return clearInterval(timer)
    }
    document.title = count;
    
  },[count])
  
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => {setIsActive((prev) => !prev)}}>{isActive ? "Stop" : "Start"}</button>
    </>
  )
}

export default App
