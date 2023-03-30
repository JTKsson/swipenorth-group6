'use client'

import { Inter } from "next/font/google";
import PlayingCards from "../components/playingCards/playingCards";

const inter = Inter({ subsets: ["latin"] });

export default function ProfilePage() {
  return (
    <>
    <div className="pagePlaceholder">Profilsida
    </div>
    <PlayingCards />
    </>
  );
}
