import { useState,useRef } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgcolor] = useState("teal");
  const [isFocus, setIsFocus] = useState(false);
  const [count, setCount] = useState    (0);

  const myDivRef = useRef();
  const myInputref = useRef();

  const changeColor = () => {
    // setBgcolor("green");
    // setIsFocus(true);
    myDivRef.current.style.backgroundColor = 'red'
    myInputref.current.focus()
    console.log(myDivRef.current)
  };

  console.log("first")
//  console.log(isFocus)
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
          //backgroundColor: bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight:'bold'
        }}
        ref={myDivRef}
      >
        {count}
      </div>
      <input type=" text" autoFocus={isFocus} ref={myInputref} />
      <input type=" text" />
      <button onClick={changeColor}>Change Color</button>
      <button onClick={()=>{setCount(count+1)}}>Count +</button>
    </div>
  );
}

export default App;
