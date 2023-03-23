import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function savedJobsPage() {
  const jobs = [
    { title: "Jobb 1", employer: "Arbetsgivare" },
    { title: "Jobb 2", employer: "Arbetsgivare" },
    { title: "Jobb 3", employer: "Arbetsgivare" },
  ];

  return (
    <>
    <div className="jobsList">
      {jobs.map((job, index) => (
        <div className="jobCell" key={index}>
          <h2>{job.title}</h2>
          <p>{job.employer}</p>
        </div>
      ))}
      </div>
      <div className="pagePlaceholder">Sparade jobb</div>
    </>
  );
}
