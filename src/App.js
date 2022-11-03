
import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState([]);
  const tempArr = [{name:'a', id:1}, {name:'b', id:2}, {name:'c', id:3}, {name:'d', id:4}, {name:'e', id:5}];
  const addHandler = (e,a) => {
    setState((prevState)=> [...prevState,a]);
  };

  console.log(state, "state");
  return (
    <div className="App">
      {tempArr.map((a,i) => (
        <button key={i} onClick={(e) => addHandler(e, a)}>{a.name}</button>
      ))}
    </div>
  );
}

export default App;
