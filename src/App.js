import './App.css';
function App() {
  function getData(val){
    console.warn(val.target.value)
  }
  return (
    <div class = "Navi GO">
      <center>
      <h1>Welcome To Navi GO</h1>
      <h2>The one stop getaway</h2>
      </center>

      <center> <p>Activity <input id = "text1" placeholder=" " onChange = {getData} /> </p>
      <p>Enter your getaway <input id="text1"  placeholder=" " onChange = {getData}/> </p>
      <p class = "input-boxes">When <input id="text1" placeholder = " " onChange = {getData} /> </p>
      <button>Enter</button>
      </center>

      
    </div>
  );
}

export default App;


     