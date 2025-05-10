import { useState,useEffect, use } from "react";

const Pomodoro = ({type}) =>{

const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const favicon = document.getElementById('favicon')

  count === 0 ?  document.title = 'time is over!!!' : document.title = count;

  useEffect(() =>{
    setCount(type === 'timer' ? 10 : 5);
  },[type]);
  
  useEffect(() => {
    let timer;

    if(isActive){
      switch(type){
        case 'timer':
          favicon.rel = 'icon';
          favicon.type = 'image/svg+xml';
          favicon.href = "/public/image/ico/speed.svg";
          break;
        case 'rest':
          favicon.rel = 'icon';
          favicon.type = 'image/svg+xml';
          favicon.href = "/public/image/ico/heal.svg";
          break;
        default:
          console.error('error');
          break;
      }

      timer = setInterval(() =>{
        setCount((prevCount) => {
          if(prevCount === 0){
            alert('timer is over!!!')
            setIsActive(false);
            setCount(type == 'timer' ? 10 : 5);          
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
        <button onClick={() => setIsActive((prev) => !prev)}>
        <i className={isActive ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
        {isActive ? "Pause" : "Start"}
        </button>
        </>
    )
}
export default Pomodoro