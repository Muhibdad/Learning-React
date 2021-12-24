# react-bootcamp
 
LEARNING REACT:
There are following main files in the React project.
1.Index.html (within src)
2.Index.js (renders to index.html via id=’root’
3.app.js (contains components)
Components will be exported from its files using {‘export default App’}
 and then imported to index.js through {import App from ‘./App’}
•	Getting elements properties:
Component: (inside App.js)
function App(props){
  return (<div>
  <h1>Hi {props.name}</h1>
  <h2>Ypur Age is {props.age}</h2>
  </div>
  )
;
}
////////OR By Destructuring////////

function App({name,age}){
  let newAge=age-10;
  return (<div>
  <h1>Hi {name}</h1>
  <h2>Your Age is {newAge}</h2>
  </div>
  )
;
}
export default App;



Index.js:
ReactDOM.render(
    <App name="Muhib" age="25"/>,
  document.getElementById('root')
);
OUTPUT:
Hi Muhib
 Your age is 25

Writing a function in JS ES6:


// Plain function:
function Hi({ name }) {
  return <div>Hello {name}!</div>;
}

// A constant holding an anonymous function:
const Hi = function({ name }) {
  return <div>Hello {name}!</div>;
}

// Turning the "function" into an arrow:
const Hi = ({ name }) => {
  return <div>Hello {name}!</div>;
}

// Optional step 3: Removing the braces, which makes the
// "return" implicit so we can remove that too. Leaving the parens
// in for readability:
const Hi = ({ name }) => (
  <div>Hello {name}!</div>
)

// Optional step 4: If the component is really short, you can put
// it all on one line, and skip the parentheses:
const Hi = ({ name }) => <div>Hello {name}!</div>;

States:
States stores the state of react components.
Syntax:
    let [isLit, setLit] = React.useState(true);
here React.useState() returns an array whose first element is variable isLit and second element is function setLit which is used to change the state of isLit variable.
Example code:
Room.js
import react, {useState} from "react";
import './App.css';
import './Room.css';

function Room(){
    
    let [isLit, setLit] = useState(true);
    const brightness = isLit ? "lit" : "dark";
    console.log(isLit);
    return <div className={`room ${brightness}`}>
        <h3>The Room is {isLit ? 'Lit':'Dark'}</h3>
        <button onClick={()=>setLit(!isLit)} >Flip</button>

    </div>
}

export default Room;

•	Brightness variable is created to store value for css class.
 use that variable, plus ES6’s template strings, to change the className. Like this:
<div className={`room ${brightness}`}>
Template strings allow you to insert variables within them, which is what the ${brightness} is doing.
The backticks signify a template string in ES6.
•	We could write the className  like this, all inline without using extra variable: <div className={`room ${isLit ? "lit" : "dark"}`}>
•	<h3> tag signifies a html tag which shows state of isLit variable.
•	On button click state function ‘setLit’ is called which flips the ‘isLit’ bool.
•	The css is provided in other file ‘Room.css’ and imported into the ‘Room.js’
•	Finally call the Room component inside the ‘App’ component.

 

