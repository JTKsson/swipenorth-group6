'use client'

import { Inter } from "next/font/google";
import PlayingCards from "../components/playingCards/playingCards";
import FilteredList from "../components/filter/filter";

const inter = Inter({ subsets: ["latin"] });

export default function ProfilePage() {
  return (
    <>    
    <FilteredList />
    <div className="pagePlaceholder">Profilsida
    </div>

    <PlayingCards />
    </>
  );
}
