'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { faFilter } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  const router = useRouter();
  return (
    <footer className="footer">
      
        <nav>
          <ul className="footer-menu">
            <li className='menu-item'>
              <Link href="/" className="menu-link">
                <FontAwesomeIcon icon={faCompass} className="menu-fa" />
                Utforska
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="../savedJobs" className='menu-link'>
                <FontAwesomeIcon icon={faHeart} className="menu-fa" />
                Sparade jobb
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="../profilePage" className='menu-link'>
              <FontAwesomeIcon icon={faHeart} className="menu-fa" />
                  Filter
              </Link>
            </li>
          </ul>
        </nav> 
    </footer>
  )
}

export default Footer
