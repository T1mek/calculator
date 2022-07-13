import React, { useState } from "react";
import styles from "./Btn.module.scss"


const Btn = (props) => {
 



  return (
  
  
  
 <div className={styles.z}>
        
        <div className={styles.button}>
           <button>jj</button>
    <div className={styles.button}>
            {props.math.map((el)=><button key={el.id}>{el.title} </button>
                
            )}
        </div>

        </div>
   
    
     </div>
  )     
};

export default Btn;
