import React, { useState } from "react";

import Btn from "./components/Btn.jsx";

function App() {
  const [math, setMath] = useState("0");
  const [result, setResult] = useState("");

  function applyExpression(countedNumber) {
    setMath(countedNumber);
    // eslint-disable-next-line no-eval
    setResult(eval(math));
  }

  // const [result,setResult]=useState(Number)
  return (
    <div className="wrapper">
      <div className="header">
        <p>
          {math} <span>{result}</span>
        </p>
        {/* <button onClick={()=>setMath(math+1)}>asdasd</button> */}
        <Btn
          math={math}
          calculator={setMath}
          expression={"/"}
          onClick={applyExpression}
          equal={result}
        />
      </div>
    </div>
  );
}

export default App;
