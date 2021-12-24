import logo from './logo.svg';
import './App.css';
import Hi from './hi';
import Room from './Lit';
import Parent from './Parent';
import React, {useState} from 'react';


// import React, { useState } from "React";
// function App(props) {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//      <h1>Hello {props.name}</h1>
//      <br />
//      <h2>Your age is {props.age}</h2>
//     </div>

//   );
// }

function App({name,age}){
  let [number,setNumber]=useState(27);
  // let newAge=age-10;
  return (<div>
  {/* <h1>Hi {name}</h1> 
  <h2>Your Age is {newAge}</h2>
  <Hi naame="muhiiib"></Hi> */}
  {/* <Room ></Room> */}
  <Parent num ={number}></Parent>
  <h1>Number={number}</h1>
  <button onClick={()=>setNumber(++number)}>Increment</button>
  </div>
  )
;
}

export default App;

