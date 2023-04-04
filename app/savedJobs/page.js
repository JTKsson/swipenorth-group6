"use client";
import { useState, useEffect, useRef } from "react"; //React hooks för att uppdatera informationen på sidan
import { Inter } from "next/font/google";
import { annonserArr } from "../../pages/api/jobbannonser/jobbannonser"; //Importerad array från en annan fil
import styles from "./page.module.css"; //Modul css
import { dislikedAD } from "@/pages/api/dislikeAd/dislikeAd";
import { likedAD } from "@/pages/api/likedAd/likedAd";

const inter = Inter({ subsets: ["latin"] });

export default function SavedJobsPage() {
  const [showPopup, setShowPopup] = useState(false); //false är för att popupen inte ska visas förrän vi vill det
  const [popupMessage, setPopupMessage] = useState({}); //visar innehållet i popupen vid knapptryck. en separat useState för att det är olika rutor som visas

  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        //denna funktion är för att minimera popuppen när man trycker utanför popupen
        setShowPopup(false);
      }
    };

    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [popupRef]);

  const handleTabClick = (job) => {
    //onclick-event styr vilket jobbs popup som ska visas.
    setShowPopup(true);
    setPopupMessage({
      title: job.workTitle,
      content: (
        <div className={styles.popupContent}>
          <h1>{job.workTitle}</h1>
          <h2>{job.company}</h2>
          <br />
          <h3>{job.time}</h3>
          <p>Sista ansökn.: {job.lastApplyDate}</p>
          <p>Lön: {job.salary}</p>
          <br />
          <p>{job.description}</p>
          <div className={styles.popupButtons}>
            <button onClick={() => console.log("Button 1 clicked!")}>
              TA BORT
            </button>
            <button onClick={() => console.log("Button 2 clicked!")}>
              ANSÖK
            </button>
          </div>
        </div>
      ),
    });
  };

  return (
    // allt detta för att hämta rätt data från api:n
    <div className={styles.container}>
      {likedAD.map((job) => (
        <div
          className={styles.box}
          key={job.id}
          onClick={() => handleTabClick(job)}
        >
          <h2>{job.workTitle}</h2>
          <p>{job.company}</p>
        </div>
      ))}
      {showPopup && (
        <div className={styles.popup} ref={popupRef}>
          <div className={styles.popupContent}>{popupMessage.content}</div>
        </div>
      )}
    </div>
  );
}
