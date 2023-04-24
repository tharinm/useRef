import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgcolor] = useState("teal");
  const [isFocus, setIsFocus] = useState(false);
  const [count, setCount] = useState(0);

  const changeColor = () => {
    setBgcolor("green");
    setIsFocus(true);
  };

  console.log(isFocus)
  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        className=""
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight:'bold'
        }}
      >
        {count}
      </div>
      <input type=" text" autoFocus={isFocus} />
      <input type=" text" />
      <button onClick={changeColor}>Change Color</button>
      <button onClick={()=>{setCount(count+1)}}>Count +</button>
    </div>
  );
}

export default App;
