import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronRight } from "react-icons/fa6";

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
            {mobileNav && (
              <div className="circle" style={{ background: "#DEF4FC" }}></div>
            )}
            <Link to="/mercury" onClick={handleLinkClick}>
              Mercury
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#F7CC7F" }}></div>
            )}
            <Link to="/venus" onClick={handleLinkClick}>
              Venus
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#545BFE" }}></div>
            )}
            <Link to="/earth" onClick={handleLinkClick}>
              Earth
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#FF6A45" }}></div>
            )}
            <Link to="/mars" onClick={handleLinkClick}>
              Mars
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#ECAD7A" }}></div>
            )}
            <Link to="/jupiter" onClick={handleLinkClick}>
              Jupiter
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#FCCB6B" }}></div>
            )}
            <Link to="/saturn" onClick={handleLinkClick}>
              Saturn
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#65F0D5" }}></div>
            )}
            <Link to="/uranus" onClick={handleLinkClick}>
              Uranus
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
          <li>
            {mobileNav && (
              <div className="circle" style={{ background: "#497EFA" }}></div>
            )}
            <Link to="/neptune" onClick={handleLinkClick}>
              Neptune
            </Link>
            {mobileNav && <FaChevronRight style={{ color: "white" }} />}
          </li>
        </ul>
      </nav>
    </header>
  );
}
