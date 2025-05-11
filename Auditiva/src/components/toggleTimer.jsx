import { useEffect } from "react";

const ToggleTimer = ({setTimer}) =>{
    
    return(
        <>
        <button onClick={() => setTimer(true)} className="Timer">Pomodoro</button>
        <button onClick={() => setTimer(false)} className="Rest">Break</button>
        </>
    )
}
export default ToggleTimer;