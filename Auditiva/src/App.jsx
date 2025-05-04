import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);
  
  document.title = count;

  useEffect(() => {
    let timer;

    if(isActive){
      timer = setInterval(() =>{
        setCount((prevCount) => {
          if(prevCount === 0){
            setIsActive(false);
            setCount(10);
            alert('time is over')
            return;
          }else{
            return prevCount - 1;
          }
        })
      
      },1000);
      
    }
    return () => clearInterval(timer);
  },[isActive]);
  
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => {setIsActive((prev) => !prev)}}>{isActive ? "Stop" : "Start"}</button>
    </>
  )
}

export default App
