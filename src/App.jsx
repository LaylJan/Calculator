import { useState } from "react";
import back from "./assets/back.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <body>
        <div className="calculator">
          <div className="num">
            <button>7</button>
          </div>
          <div className="num">
            <button>8</button>
          </div>
          <div className="num">
            <button>9</button>
          </div>
          <div className="num">
            <button>-</button>
          </div>
          <div className="num">
            <button>
              <img src={back} alt="" />
            </button>
          </div>
          <div className="num">
            <button>4</button>
          </div>
          <div className="num">
            <button>5</button>
          </div>
          <div className="num">
            <button>6</button>
          </div>
          <div className="num">
            <button>X</button>
          </div>
          <div className="num">
            <button>/</button>
          </div>
          <div className="num">
            <button>1</button>
          </div>
          <div className="num">
            <button>2</button>
          </div>
          <div className="num">
            <button>3</button>
          </div>
          <div className="num size-2">
            <button>+</button>
          </div>
          <div className="num">
            <button>-</button>
          </div>
          <div className="num">
            <button>0</button>
          </div>

          <div className="num">
            <button>.</button>
          </div>
          <div className="num">
            <button>=</button>
          </div>
          <div className="num">
            <button>C</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
