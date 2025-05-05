import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const favicon = document.getElementById('favicon')
  if(count === 0){
    document.title = 'time is over!!!';
  }
  else{
    document.title = count;
  }
  
  function toggleIco(){
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = "/public/image/ico/heal.svg";
  }

  useEffect(() => {
    let timer;

    if(isActive){

      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.href = "/public/image/ico/speed.svg";

      timer = setInterval(() =>{
        setCount((prevCount) => {
          if(prevCount === 0){
            toggleIco();
            alert('timer is over!!!')
            setIsActive(false);
            setCount(10);          
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
