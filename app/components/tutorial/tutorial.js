"use client"
import { React, useState } from "react";
import styles from "./tutorial.module.css"
import { TfiAngleDoubleUp, TfiAngleDoubleRight, TfiAngleDoubleLeft, TfiAngleDoubleDown, TfiHandPointUp} from "react-icons/tfi";

const Tutorial = () => {

  const [isHidden, setIsHidden] = useState(
    localStorage.getItem("isHidden") === "true" // Check if isHidden is set to true in localStorage
  );

  const handleHide = () => {
    setIsHidden(true);
    localStorage.setItem("isHidden", "true"); // Store isHidden as true in localStorage
  };

  return (
    <>
    {isHidden ? null : <div className={styles.tutorialCard}> 
      <p className={`${styles.arrow} ${styles.up}`}><TfiAngleDoubleUp />upp</p>
      <div className={styles.leftRight}>
      <p className={`${styles.arrow} ${styles.left}`}>vänster<TfiAngleDoubleLeft /></p>
      <p className={`${styles.arrow} ${styles.right}`}>höger<TfiAngleDoubleRight /></p>
      </div>
      <p className={`${styles.pointer} ${styles.arrow}`}><TfiHandPointUp /> Tryck och håll</p>
      <p className={`${styles.arrow} ${styles.down}`}>ner<TfiAngleDoubleDown /></p>
      <button className={styles.hide} onClick={handleHide}>Okej!</button>
    </div>
    }
    </>
  )
}

export default Tutorial