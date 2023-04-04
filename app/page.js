'use client'
import { Inter } from "next/font/google";
import Image from "next/image";
import JobCard from "./components/jobCard/jobCard";
import PlayingCards from "./components/playingCards/playingCards";
import Tutorial from "./components/tutorial/tutorial";
import RainbowRose from "public/rainbowrose.jpg";
import { BouncingBallsDivComponent } from "react-bouncing-balls";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <PlayingCards />
    <Tutorial />
    </>
  );
}
