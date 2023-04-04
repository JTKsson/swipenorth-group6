"use client"
import React, { useState, useEffect } from "react";
import styles from "./tutorial.module.css"
import { TfiAngleDoubleUp, TfiAngleDoubleRight, TfiAngleDoubleLeft, TfiAngleDoubleDown, TfiHandPointUp} from "react-icons/tfi";

const Tutorial = () => {

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const storedIsHidden = localStorage.getItem("isHidden");
    // localStorage.getItem("isHidden");
    // console.log(storedIsHidden)
    
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
      <p className={`${styles.arrow} ${styles.up}`}><TfiAngleDoubleUp />Swipa norrut för de jobb du gillar</p>
      <p className={`${styles.arrow} ${styles.down}`}>Swipa ner för de jobb som inte är intressanta<TfiAngleDoubleDown /></p>
      <button className={`${styles.button}`} onClick={handleHide}>Okej!</button>
    </div>
    )}
    </>
  )
}

export default Tutorial