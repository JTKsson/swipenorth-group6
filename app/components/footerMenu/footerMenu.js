'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { CiSliderHorizontal, CiHeart, CiCompass1 } from "react-icons/ci"
import styles from "./footer.module.css"


const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={styles.footer}>
        <nav>
          <ul className={styles.footerMenu}>
            <li className={styles.menuItem}>
              <Link 
                href="/" 
                className={`${styles.menuLink} ${(pathname === '/' ? styles.active : '')}`}

                
              >
                 <div className={styles.menuFa} >
                <CiCompass1/>
                </div>
              </Link>
            </li>
            <li className={styles.menuItem}>
            <Link 
                href="../savedJobs" 
                className={`${styles.menuLink} ${(pathname === '/savedJobs' ? styles.active : '')}`}

              >
               <div className={styles.menuFa} >
                <CiHeart/>
                </div>
              </Link>
            </li>
            <li className={styles.menuItem}>
            <Link 
                href="../filterPage" 
                className={`${styles.menuLink} ${(pathname === '/filterPage' ? styles.active : '')}`}
              >
                <div className={styles.menuFa} >
                <CiSliderHorizontal/>
                </div>
              
              </Link>
            </li>
          </ul>
        </nav> 
    </footer>
  )
}

export default Footer