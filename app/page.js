import { Inter } from "next/font/google";
import JobCard from "./components/jobCard/jobCard";
import Tutorial from "./components/tutorial/tutorial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <JobCard />
    <Tutorial />
    </>
  );
}
