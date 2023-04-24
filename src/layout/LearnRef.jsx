import { useState, useRef, useEffect } from "react";
import "../App.css";

function LearnRef() {
  // const [bgColor, setBgcolor] = useState("teal");
  // const [isFocus, setIsFocus] = useState(false);
  const [count, setCount] = useState(0);

  const myDivRef = useRef();
  const myInputref = useRef();

  const changeColor = () => {
    // setBgcolor("green");
    // setIsFocus(true);
    myDivRef.current.style.backgroundColor = "red";
    myInputref.current.focus();
    console.log(myDivRef.current);
  };

  useEffect(() => {
    console.log("hello");
    const mouse = e => {
      console.log(e.x)
       console.log(e.y);
    }
   // console.log('hello')
    window.addEventListener('mousemove', mouse)
    
    return () => {
       window.removeEventListener("mousemove", mouse);
 
    }
    
  }, []);

  const handleChange = (action) => {
    switch (action) {
      case "bgPink":
        myDivRef.current.style.backgroundColor = "pink";
        break;
      case "bgTeal":
        myDivRef.current.style.backgroundColor = "teal";
        break;
      case "MarginT":
        myDivRef.current.style.marginTop = "100px";
        break;
      case "MarginL":
        myDivRef.current.style.marginLeft = "20px";
        break;
      case "border":
        myDivRef.current.style.border = "2px solid red";
        break;
      case "borderR":
        myDivRef.current.style.border = "40px";
        break;
      case "height":
        myDivRef.current.style.width =
          parseInt(myDivRef.current.style.width) + 100 + "px";
        break;
      case "width":
        myDivRef.current.style.height =
          parseInt(myDivRef.current.style.height) + 100 + "px";
    }
  };

  console.log("first");
  //  console.log(isFocus)
  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        color: "black",
      }}
    >
      <div
        className=""
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        ref={myDivRef}
      >
        {count}
      </div>
      <input type=" text" ref={myInputref} />
      <input type=" text" />
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={() => handleChange("bgPink")}> Bg Pink</button>
        <button onClick={() => handleChange("bgTeal")}> Bg Teal</button>
        <button onClick={() => handleChange("MarginL")}> Margin Left </button>
        <button onClick={() => handleChange("MarginT")}> Margin Top </button>
        <button onClick={() => handleChange("border")}> Border </button>
        <button onClick={() => handleChange("borderR")}> Border Radius </button>
        <button onClick={() => handleChange("height")}> Height </button>
        <button onClick={() => handleChange("width")}> Width </button>
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>
    </div>
  );
}

export default LearnRef;
