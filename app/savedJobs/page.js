"use client"
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { annonserArr } from "../../pages/api/jobbannonser/jobbannonser";
import styles from './savedJobs/page.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function SavedJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({});

  const handleTabClick = (job) => {
    setShowPopup(true);
    setPopupMessage({ title: job.workTitle, content: (
      <>
        <p>{job.workTitle}</p>
        <p>{job.company}</p>
        <p>{job.time}</p>
        <p>{job.lastApplyDate}</p>
        <p>{job.salary}</p>
        <p>{job.description}</p>
        <div className={styles.popupButtons}>
        <button onClick={() => console.log('Button 1 clicked!')}>
          TA BORT
        </button>
        <button onClick={() => console.log('Button 2 clicked!')}>
          ANSÖK
        </button>
      </div>
      </>
    )});
  };

  return (
    <div className={styles.box.container}>
      {annonserArr.map((job) => (
        <div className={styles.box} key={job.id} onClick={() => handleTabClick(job)}>
          <h2>{job.workTitle}</h2>
          <p>{job.company}</p>
        </div>
      ))}
      {showPopup && (
        <div className={styles.popup}>
          <h2>{popupMessage.title}</h2>
          <div>{popupMessage.content}</div>
          <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
      )}
    </div>
  );
}

// onClick={() => handleTabClick(job)}

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function savedJobsPage() {
//   const jobs = [
//     { title: "Jobb 1", employer: "Arbetsgivare" },
//     { title: "Jobb 2", employer: "Arbetsgivare" },
//     { title: "Jobb 3", employer: "Arbetsgivare" },
//   ];

//   return (
//     <>
//     <div className="jobsList">
//       {jobs.map((job, index) => (
//         <div className="jobCell" key={index}>
//           <h2>{job.title}</h2>
//           <p>{job.employer}</p>
//         </div>
//       ))}
//       </div>
//       <div className="pagePlaceholder">Sparade jobb</div>
//     </>
//   );
// }
