"use client";
import { useState, useEffect } from "react";


const page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [boxes, setBoxes] = useState([]);
 
  useEffect(() => {
    // data from API
    fetch(annonserArr)
      .then(response => response.json())
      .then(data => {
        //boxes with data from API
        setBoxes(data.map(item => ({
          title: item.title,
          content: item.content
        })));
      })
      .catch(error => console.error(error));
  }, []);

  const handleTabClick = (message) => {
    setShowPopup(true);
    setPopupMessage(message);
  };

  return (
    <div className={styles.box.container}>
      {boxes.map((box, index) => (
        <div className={styles.box} key={index} onClick={() => handleTabClick(box)}>
          <h2>{box.title}</h2>
          <p>{box.content}</p>
        </div>
      ))}
      {showPopup && (
        <div className={styles.popup}>
          <h2>{popupMessage.title}</h2>
          <p>{popupMessage.content}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};
export default page;
