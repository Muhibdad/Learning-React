import react, {useState} from "react";
import './App.css';
import './Room.css';

function Room(){
    
    let [isLit, setLit] = useState(true);
    const brightness = isLit ? "litt" : "darkk";
    console.log(isLit);
    return <div className={`room ${brightness}`}>
        <h3>The Room is {isLit ? 'Lit':'Dark'}</h3>
        <button onClick={()=>setLit(!isLit)} >Flip</button>

    </div>
}

export default Room;

