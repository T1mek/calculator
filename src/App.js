import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((z) => z + e.target.innerHTML)
      : setCurState(e.target.innerHTML);
    setTotal();
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);
  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerHTML);
    if (curState === "") return;
    if (preState !== "") {
      equal();
    }
    setCurState("");
    setPreState(curState);
  };

  const equal = (e) => {
    if (e.target.innerHTML === "=") setTotal(true);
    {
      let summ;
      switch (operator) {
        case "/":
          summ = String(parseFloat(preState) / parseFloat(curState));
          break;
        case "X":
          summ = String(parseFloat(preState) * parseFloat(curState));
          break;
        case "+":
          summ = String(parseFloat(preState) + parseFloat(curState));
          break;
        case "-":
          summ = String(parseFloat(preState) - parseFloat(curState));
          break;

        default:
          return;
      }
      setInput("0");
      setCurState("");
      setPreState(summ);
    }
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {  preState ? setCurState(String(parseFloat(curState) / 100 * preState))
  : setCurState(String(parseFloat(curState) / 100))
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {" "}
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className="btn light-gray" onClick={reset}>
          AC
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn orange" onClick={operatorType}>
          /
        </div>
        <div className="btn" onClick={inputNum}>
          7
        </div>
        <div className="btn" onClick={inputNum}>
          8
        </div>
        <div className="btn" onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          X
        </div>
        <div className="btn" onClick={inputNum}>
          4
        </div>
        <div className="btn" onClick={inputNum}>
          5
        </div>
        <div className="btn" onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn" onClick={inputNum}>
          1
        </div>
        <div className="btn" onClick={inputNum}>
          2
        </div>
        <div className="btn" onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn zero" onClick={inputNum}>
          0
        </div>
        <div className="btn" onClick={inputNum}>
          .
        </div>
        <div className="btn orange" onClick={equal}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
