"use client";
import { Inter } from "next/font/google";
import PlayingCards from "./components/playingCards/playingCards";
import Tutorial from "./components/tutorial/tutorial";
import UserWindow from "./components/UserWindow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PlayingCards />
      <Tutorial />
    </>
  );
}
