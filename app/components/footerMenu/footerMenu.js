'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { CiSliderHorizontal, CiHeart, CiCompass1 } from "react-icons/ci"

const Footer = () => {
  const pathname = usePathname();
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