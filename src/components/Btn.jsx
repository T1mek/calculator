import React, { useState } from "react";
import styles from "./Btn.module.scss";

const Btn = (props) => {
   
  return (
    <div className={styles.z}>
      <div className={styles.button}>
        <div className={styles.btn}>
          <button onClick={()=>props.calculator(0)}>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className={styles.btn1}>÷</button>
        </div>
        <div className={styles.btn}>
          <button onClick={()=>props.calculator(7)}>7</button>
          <button onClick={()=>props.calculator(8)}>8</button>
          <button onClick={(e)=>props.calculator(props.math+e.target.innerHTML)}>9</button>
          <button className={styles.btn1}>*</button>
        </div>
        <div className={styles.btn}>
          <button onClick={()=>props.calculator(4)}>4</button>
          <button onClick={()=>props.calculator(5)}>5</button>
          <button onClick={()=>props.calculator(6)}>6</button>
          <button className={styles.btn1}>-</button>
        </div >
        <div className={styles.btn}>
        <button onClick={()=>props.calculator(1)}>1</button>
        <button onClick={()=>props.calculator(2)}>2</button>
        <button onClick={()=>props.calculator(3)}>3</button>
        <button onClick={(e)=>{props.setMath(props.math+e.target.innerHTML)}} className={styles.btn1}>+</button>
        </div>
        <div className={styles.btn}>
          <button onClick={()=>props.calculator(0)} className={styles.btn2}>0</button>
          <button onClick={()=>props.calculator(".")}>.</button>
          <button className={styles.btn1}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Btn;
