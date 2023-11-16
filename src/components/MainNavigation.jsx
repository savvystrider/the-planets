import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

export default function MainNavigation() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleClick() {
    setMobileNav((prev) => !prev);
  }

  function handleLinkClick() {
    setMobileNav(false);
  }

  return (
    <header>
      <Link to="">
        <h2>The Planets</h2>
      </Link>
      <nav>
        <button
          aria-expanded={mobileNav}
          aria-controls="menu"
          className="toggle-btn"
          onClick={handleClick}
        >
          <FaBars style={{ color: "white" }} />
          <span className="sr-only">menu</span>
        </button>
        <ul className={mobileNav ? "mobile" : ""}>
          <li>
            <Link to="/mercury" onClick={handleLinkClick}>
              Mercury
            </Link>
          </li>
          <li>
            <Link to="/venus" onClick={handleLinkClick}>
              Venus
            </Link>
          </li>
          <li>
            <Link to="/earth" onClick={handleLinkClick}>
              Earth
            </Link>
          </li>
          <li>
            <Link to="/mars" onClick={handleLinkClick}>
              Mars
            </Link>
          </li>
          <li>
            <Link to="/jupiter" onClick={handleLinkClick}>
              Jupiter
            </Link>
          </li>
          <li>
            <Link to="/saturn" onClick={handleLinkClick}>
              Saturn
            </Link>
          </li>
          <li>
            <Link to="/uranus" onClick={handleLinkClick}>
              Uranus
            </Link>
          </li>
          <li>
            <Link to="/neptune" onClick={handleLinkClick}>
              Neptune
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
