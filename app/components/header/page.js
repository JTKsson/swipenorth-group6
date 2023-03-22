
import Image from 'next/image'
import logo from "../../../public/compass-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



function Header() {
    return (
      <header>
        <div className="logo">
        <Link href="/" className='menu-link'>
          <Image src={logo} alt="Logo" width={60} height={60} />
        </Link>
        
        </div>
        <div className="sort">
            <FontAwesomeIcon icon={faSort} />
        </div>
        <div className="filter">
            <FontAwesomeIcon icon={faFilter} />
        </div> 
      </header>
    );
  }

  export default Header