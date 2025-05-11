import { useEffect } from "react";

const ToggleTimer = ({setTimer}) =>{
    
    return(
        <>
        <button onClick={() => setTimer(true)} className="Timer"> <i class="fa-solid fa-fire"></i>Focus </button>
        <button onClick={() => setTimer(false)} className="Rest"> <i class="fa-solid fa-mug-hot"></i>Break</button>
        </>
    )
}
export default ToggleTimer;