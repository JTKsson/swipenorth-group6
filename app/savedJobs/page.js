import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main">
      This page is for the saved jobs in the future
    </div>
  );
}
