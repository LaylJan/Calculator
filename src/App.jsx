import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <body>
        <div className="calculator">
          <div className="num">
            <button>1</button>
          </div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
        </div>
      </body>
    </div>
  );
}

export default App;
