"use client";
import React, { useState, useEffect } from "react";
import styles from "./tutorial.module.css";
import { TfiAngleDoubleUp, TfiAngleDoubleDown } from "react-icons/tfi";
import { GiClick } from "react-icons/gi";

const Tutorial = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const storedIsHidden = localStorage.getItem("isHidden");
    setIsHidden(storedIsHidden || false);
  }, []);

  const handleHide = () => {
    setIsHidden(true);
    localStorage.setItem("isHidden", "true");
  };

  return (
    <>
      {!isHidden && (
        <div className={styles.tutorialCard}>
          <p className={`${styles.arrow} ${styles.up}`}>
            <span><TfiAngleDoubleUp /></span>
            <span>Swipa norrut</span> <br/>
            För de jobb du gillar
          </p>
          <p className={styles.point}><GiClick/></p>
          <p className={`${styles.arrow} ${styles.down}`}>
            <span>Swipa ner</span> <br/>För de jobb som inte är intressanta
            <span><TfiAngleDoubleDown /></span>
          </p>
          <button className={`${styles.button}`} onClick={handleHide}>
            Okej!
          </button>
        </div>
      )}
    </>
  );
};

export default Tutorial;
