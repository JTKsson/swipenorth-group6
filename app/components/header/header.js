import Image from "next/image";
import logo from "../../../public/compass-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import KommunLogo from "public/logo-Kommun-black.png";
import DummyLogo from "public/Dummy-logo-SwN.svg";
import FilterSlider from "public/filter-slider.svg";


function Header() {
  return (
    <header>
      <Link
        className="kommunLogoContainer"
        href="https://skelleftea.se/platsen/flytta-hit/flytta-hit"
      >
        <Image
          src={KommunLogo}
          alt="Logo Skellefteå kommun"
          height={45}
          placeholder="blur"
        />
      </Link>
      <div className="logo">
        <Link href="/" className="menu-link">
          <Image src={DummyLogo} alt="Logo" height={100} />
        </Link>
      </div>
      <Image src={FilterSlider} alt="Filter icon" height={30} />
      {/* <div className="sort">
            <FontAwesomeIcon icon={faSort} />
        </div>
        <div className="filter">
            <FontAwesomeIcon icon={faFilter} />
        </div>  */}
    </header>
  );
}

export default Header;
