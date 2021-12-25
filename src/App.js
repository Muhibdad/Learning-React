import React, {useState} from 'react';
import './App.css';
import Child from './Child';
import Child2 from './child2';
// import Hi from './hi';
// import Room from './Lit';
import Parent from './Parent';
import ValueContext from './valueContext';


// function App({name,age}){
//   let [number,setNumber]=useState(27);
//   // let newAge=age-10;
//   return (<div>
//   {/* <h1>Hi {name}</h1> 
//   <h2>Your Age is {newAge}</h2>
//   <Hi naame="muhiiib"></Hi> */}
//   {/* <Room ></Room> */}
//   <Parent num ={number}></Parent>
//   <h1>Number={number}</h1>
//   <button onClick={()=>setNumber(++number)}>Increment</button>
//   </div>
//   )
// ;
// }

function App(){
  
  let value=useState(20);
  //value=[value,function] 
  return (
    <ValueContext.Provider value={value}>
        {/* <Child></Child> */}
            <div><Child2></Child2></div>
      
     </ValueContext.Provider>
  );
}

export default App;

