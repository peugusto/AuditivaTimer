// import { useState,useEffect } from "react";

// const Timeout = () =>{

//   const [count, setCount] = useState(10);
//   const [isActive, setIsActive] = useState(false);
//   const favicon = document.getElementById('favicon')
//   if(count === 0){
//     document.title = 'time is over!!!';
//   }
//   else{
//     document.title = count;
//   }
  
//   useEffect(() => {
//     let timer;
//     console.log("started");
//     if(isActive){

//       favicon.rel = 'icon';
//       favicon.type = 'image/svg+xml';
//       favicon.href = "/public/image/ico/heal.svg";

//       timer = setInterval(() =>{
//         setCount((prevCount) => {
//           if(prevCount === 0){
//             alert('timer is over!!!')
//             setIsActive(false);
//             setCount(10);          
//             return;
//           }else{
//             return prevCount - 1;
//           }
//         })
//       },1000);    
//     }

//     return () => clearInterval(timer);
//   },[isActive]);
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={() => setIsActive((prev) => !prev)}>
//         <i className={isActive ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
//         {isActive ? "Pause" : "Start"}</button>
//         </>
//     )
// }
// export default Timeout