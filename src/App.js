import React, { useState } from "react";

import Btn from "./components/Btn.jsx";

function App() {
  const [math, setMath] = useState("0");
  const [result, setResult] = useState('')
  
  
  // const [result,setResult]=useState(Number)
  return (
    <div className="wrapper">
      <div className="header">
        <p>{math} </p>
        {/* <button onClick={()=>setMath(math+1)}>asdasd</button> */}
        <Btn 
        math={math}
        
        calculator={setMath} />
      </div>
    </div>
  );
}

export default App;
