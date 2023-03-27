"use client";
import { useState } from "react";
import styles from "../sparadeJobb/page.module.css";

const page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleTabClick = (message) => {
    setShowPopup(true);
    setPopupMessage(message);
  };

  return (
    <div className={styles.box.container}>
    <div className={styles.box} onClick={() => handleTabClick("Content for städare")}>
        <h2>städare</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      <div className={styles.box} onClick={() => handleTabClick("Content för taxi")}>
        <h2>Taxi</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      <div className={styles.box} onClick={() => handleTabClick("Content för")}>
        <h2>Title</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      <div className={styles.box} onClick={() => handleTabClick("Content för")}>
        <h2>Title</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      <div className={styles.box} onClick={() => handleTabClick("Content for")}>
        <h2>Title</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      <div className={styles.box} onClick={() => handleTabClick("Content för")}>
        <h2>Title</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      <div className={styles.box} onClick={() => handleTabClick("Content för")}>
        <h2>Title</h2>
        <p>t is a long established fact that a reader will
           be distracted by the readable content of a 
           page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
             more-or-less normal distribution</p>
      </div>
      {showPopup && (
  <div className={styles.popup}>
    <h2>{popupMessage.title}</h2>
    <p>{popupMessage.paragraph}</p>
    <button onClick={() => setShowPopup(false)}>Close</button>
  </div>
)}
    </div>
  );
};
export default page;