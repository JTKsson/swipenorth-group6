'use client'
import Link from 'next/link'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faFilter} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from 'next/navigation';
import { VscCompass } from 'react-icons/fa';
import { IconName } from "react-icons/ai";
import { CiSliderHorizontal, CiHeart, CiCompass1 } from "react-icons/ci"


const Footer = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <footer className="footer">
        <nav>
          <ul className="footer-menu">
            <li className='menu-item'>
              <Link 
                href="/" 
                className={'menu-link' + (pathname === '/' ? ' active' : '')}
              >
                 <div className='menu-fa' >
                <CiCompass1/>
                </div>
              </Link>
            </li>
            <li className='menu-item'>
            <Link 
                href="../savedJobs" 
                className={'menu-link' + (pathname === '/savedJobs' ? ' active' : '')}
              >
               <div className='menu-fa' >
                <CiHeart/>
                </div>
              </Link>
            </li>
            <li className='menu-item'>

            <Link 
                href="../profilePage" 
                className={'menu-link' + (pathname === '/profilePage' ? ' active' : '')}
              >
                <div className='menu-fa' >
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
