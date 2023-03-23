import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import JobBox from "./components/jobBox/jobBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main">
      <JobBox />
    </div>
  );
}
