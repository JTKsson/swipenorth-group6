"use client"
import React, { useState, useEffect } from "react";
import styles from "./tutorial.module.css"
import { TfiAngleDoubleUp, TfiAngleDoubleRight, TfiAngleDoubleLeft, TfiAngleDoubleDown, TfiHandPointUp} from "react-icons/tfi";

const Tutorial = () => {

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const storedIsHidden = localStorage.getItem("isHidden");
    // localStorage.getItem("isHidden");
    console.log(storedIsHidden)
    
    // if (storedIsHidden === "false") {
      setIsHidden(storedIsHidden || false);
    // }
    //  else {
    //   setIsHidden(true);
    // }
  }, []);

  const handleHide = () => {
    setIsHidden(true);
    localStorage.setItem("isHidden", "true");
  };

  return (
    <>
    {!isHidden && ( <div className={styles.tutorialCard}> 
      <p className={`${styles.arrow} ${styles.up}`}><TfiAngleDoubleUp />upp</p>
      <div className={styles.leftRight}>
       <p className={`${styles.arrow} ${styles.left}`}>vänster<TfiAngleDoubleLeft /></p>
       <p className={`${styles.arrow} ${styles.right}`}>höger<TfiAngleDoubleRight /></p>
      </div>
      <p className={`${styles.pointer} ${styles.arrow}`}><TfiHandPointUp /> Tryck och håll</p>
      <p className={`${styles.arrow} ${styles.down}`}>ner<TfiAngleDoubleDown /></p>
      <button className={styles.hide} onClick={handleHide}>Okej!</button>
    </div>
    )}
    </>
  )
}

export default Tutorial