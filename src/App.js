import './App.css';
import React, {useState} from 'react';
import GoogleMap from './components/GoogleMap';


function App() {
  function getData(val){
    console.warn(val.target.value)
  }
  const [selected, setSelected] = useState("Choose One");
  return (
   
  
    <div class = "App-header">
      
      <center>
      <h1>Welcome To Navi GO</h1>
      
      </center>
      <center> 
      
      <p>Enter your getaway <input id="text1"  placeholder=" " onChange = {getData}/> </p>
      <p class = "input-boxes">When <input id="text1" placeholder = " " onChange = {getData} /> </p>
      <button>Enter</button>
      <GoogleMap />
      </center>
      

      
    </div>
  );
}

export default App;


     