import React from "react";
import { useContext } from "react";
import ValueContext from "./valueContext";


function Child(){
let value =useContext(ValueContext);
    return (<div >
       Number = {value}
       <br></br>
       <button onClick={()=>{value[1](++value[0])}}>Increment</button>
    </div>);
}

export default Child;