import React, { useReducer } from "react";
import numberReducer from "./numberReducer";


function Child2(){
//    let [state,dispatch]=useReducer(numberReducer,32);
   let value=useReducer(numberReducer,32);
    return (<div>
        child2 {value};
        <button onClick={()=>{value[1]({type:"INCREMENT"})}}>Increment</button>
        <button onClick={()=>{value[1]({type:"DECREMENT"})}}>Increment</button>
    </div>);
}

export default Child2;  