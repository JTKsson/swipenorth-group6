import Link from "next/link";
import Image from "next/image";
import KommunLogo from "public/logo-Kommun-black.png";
export default function HeaderLayout({ children }) {
  return (
    <Link href="https://skelleftea.se/platsen/flytta-hit/flytta-hit">
      <Image
        src={KommunLogo}
        alt="Logo Skellefteå kommun"
        height={45}
        placeholder="blur"
      />
    </Link>
  );
}

//   <header className={styles.test}>
//         </header>
