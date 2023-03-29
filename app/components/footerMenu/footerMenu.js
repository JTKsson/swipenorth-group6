'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faSliders} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="footer">
        <nav>
          <ul className="footer-menu">
            <li className='menu-item'>
              <Link href="/" className="menu-link">
                <a className={router.pathname === '/' ? 'active' : ''} >hej</a>
                <FontAwesomeIcon icon={faCompass} className="menu-fa" />
                Utforska
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="../savedJobs" className='menu-link'>
              <a className={router.pathname === 'savedJobs' ? 'active' : ''} >hej</a>
                <FontAwesomeIcon icon={faHeart} className="menu-fa" / >
                Sparade jobb
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="../profilePage" className='menu-link'>
              <a className={router.pathname === 'profilePage' ? 'active' : ''} />
                <FontAwesomeIcon icon={faSliders} className="menu-fa" />
                Filter
              </Link>
            </li>
          </ul>
        </nav> 
    </footer>
  )
}

export default Footer
