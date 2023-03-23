import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import JobBox from "./components/jobBox/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main">
      <h1>Swipe North gr 6</h1>
      <JobBox />
    </div>
  );
}
