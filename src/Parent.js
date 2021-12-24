import react from "react";
import Child from "./Child";

function Parent(props){
    return <div>
        Parent hear
        <Child  num={props.num}></Child>
    </div>
}

export default Parent;