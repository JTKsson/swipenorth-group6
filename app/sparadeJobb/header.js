"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from "../sparadeJobb/page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
