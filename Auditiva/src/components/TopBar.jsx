import data from "../content/data";
import ToDo from "./ToDo";

const TopBar = ({tasksDone,state}) =>{
    
    const dataNow = data();
    
    return(
        <div className="TopBar">
        <p>Progress</p>
        <p> <strong id="countBg">{tasksDone}/{state.count}</strong> Tasks were done.</p>
        <p>{dataNow}</p>
        </div>
    )
}

export default TopBar;