import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState([]);
  const tempArr = [
    { name: "a", id: 1 },
    { name: "b", id: 2 },
    { name: "c", id: 3 },
    { name: "d", id: 4 },
    { name: "e", id: 5 },
  ];
  const addHandler = (e, a, i) => {
    let storeArr = [...state];

    if (a.id === storeArr[i]?.id) {
      console.log("yo");
      let qwerty = storeArr.filter((b) => b?.id !== a?.id);
      setState(qwerty);
    } else {
      setState(storeArr);
    }
    storeArr[i] = a;
  };
  const filterArr = state.filter((a) => {
    if (a !== undefined || a !== null) {
      return a;
    }
  });
  console.log(filterArr, "filterArr");
  return (
    <div className="App">
      {tempArr.map((a, i) => (
        <button key={i} onClick={(e) => addHandler(e, a, i)}>
          {a.name}
        </button>
      ))}
    </div>
  );
}

export default App;
