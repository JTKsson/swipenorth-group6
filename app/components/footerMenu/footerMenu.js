import Link from 'next/link'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav>
          <ul className="footer-menu">
            <li className='menu-item'>
              <Link href="/" className='menu-link'>
                <FontAwesomeIcon icon={faCompass} className="menu-fa"/>
                Utforska
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="../savedJobs" className='menu-link'>
                <FontAwesomeIcon icon={faHeart} className="menu-fa"/>
                Sparade jobb
              </Link>
            </li>
            <li className='menu-item'>
              <Link href="../yourProfile" className='menu-link'>
                <FontAwesomeIcon icon={faUser} className="menu-fa"/>
                Profil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
