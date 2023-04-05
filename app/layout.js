import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footerMenu/footerMenu";
import Header from "./components/header/header";
import styles from "app/page.module.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Swipe North",
  description: "Swipe North job search prototype, group 6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
