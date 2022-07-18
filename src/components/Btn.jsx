import React, { useState } from "react";
import styles from "./Btn.module.scss";

const Btn = (props) => {

function numEnt(e){
if(props.math !=="0"){props.calculator(props.math+e.target.innerHTML)}
else props.calculator(e.target.innerHTML)
}



   
  return (
    <div className={styles.z}>
      <div className={styles.button}>
        <div className={styles.btn}>
          <button onClick={()=>props.calculator("")}>AC</button>
          <button>+/-</button>
          <button onClick={(e)=>props.calculator(props.math+e.target.innerHTML)}>%</button>
          <button onClick={numEnt} className={styles.btn1}>/</button>
        </div>
        <div className={styles.btn}>
          <button onClick={numEnt}>7</button>
          <button onClick={numEnt}>8</button>
          <button onClick={numEnt}>9</button>
          <button onClick={numEnt} className={styles.btn1}>*</button>
        </div>
        <div className={styles.btn}>
          <button onClick={numEnt}>4</button>
          <button onClick={numEnt}>5</button>
          <button onClick={numEnt}>6</button>
          <button onClick={numEnt} className={styles.btn1}>-</button>
        </div >
        <div className={styles.btn}>
        <button onClick={numEnt}>1</button>
        <button onClick={numEnt}>2</button>
        <button onClick={numEnt}>3</button>
        <button onClick={numEnt} className={styles.btn1}>+ </button>
        </div>
        <div className={styles.btn}>
          <button onClick={numEnt} className={styles.btn2}>0</button>
          <button onClick={numEnt}>.</button>
          <button onClick={()=>props.onClick()} className={styles.btn1}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Btn;
