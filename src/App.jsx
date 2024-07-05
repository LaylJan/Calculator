import { useState } from "react";
import back from "./assets/back.svg";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => {
      console.log(isNaN(prevDisplay), prevDisplay);
      console.log(isNaN(value));
      if (value === "C") {
        return "0";
      } else if (value === "=") {
        // Leave it blank for now (you can add your logic here later)
        return prevDisplay;
      }
      if (value === "<") {
        return prevDisplay.length > 1 ? prevDisplay.slice(0, -1) : "0";
      } else if (isNaN(prevDisplay.slice(-1)) && isNaN(value)) {
        return prevDisplay.length > 1
          ? prevDisplay.slice(0, -1) + value
          : value;
      } else {
        return prevDisplay === "0" ? value : prevDisplay + value;
      }
    });
  };

  return (
    <div>
      <body>
        <div className="calculator">
          <div className="num">
            <button onClick={() => appendToDisplay("7")}>7</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("8")}>8</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("9")}>9</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("-")}>-</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("<")}>
              <img src={back} alt="" />
            </button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("4")}>4</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("5")}>5</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("6")}>6</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("*")}>X</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("/")}>/</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("1")}>1</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("2")}>2</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("3")}>3</button>
          </div>
          <div className="num size-2">
            <button onClick={() => appendToDisplay("+")}>+</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("-")}>-</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("0")}>0</button>
          </div>

          <div className="num">
            <button onClick={() => appendToDisplay(".")}>.</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("=")}>=</button>
          </div>
          <div className="num">
            <button onClick={() => appendToDisplay("C")}>C</button>
          </div>
        </div>
        <div>
          <p className="display">{display}</p>
        </div>
      </body>
    </div>
  );
}

export default App;
