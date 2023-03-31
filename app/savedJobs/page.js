"use client"
import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { annonserArr } from "../../pages/api/jobbannonser/jobbannonser";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function SavedJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({});

  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [popupRef]);

  const handleTabClick = (job) => {
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
    <div className={styles.container}>
      {annonserArr.map((job) => (
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
