import { useState, useEffect } from "react";

const Pomodoro = ({ type }) => {
  const [count, setCount] = useState(0); 
  const [isActive, setIsActive] = useState(false);
  const favicon = document.getElementById('favicon');


  const minutes = Math.floor(count / 60);
  const seconds = count % 60;


  useEffect(() => {
    document.title = count === 0 
      ? 'time is over!!!' 
      : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, [count, minutes, seconds]);


  useEffect(() => {
    if (type === 'timer') {
      setCount(25 * 60); 
    } else if (type === 'rest') {
      setCount(5 * 60); 
    }
  }, [type]);


  useEffect(() => {
    let timer;

    if (isActive) {
      switch (type) {
        case 'timer':
          favicon.href = "/public/image/ico/speed.svg";
          break;
        case 'rest':
          favicon.href = "/public/image/ico/heal.svg";
          break;
        default:
          console.error('error');
          break;
      }

      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            alert('timer is over!!!');
            setIsActive(false);
            return type === 'timer' ? 25 * 60 : 5 * 60;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, type]);

  return (
    <>
      <h1>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h1>
      <button onClick={() => setIsActive((prev) => !prev)}>
        <i className={isActive ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
        {isActive ? "Pause" : "Start"}
      </button>
    </>
  );
};

export default Pomodoro;
