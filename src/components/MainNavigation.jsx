import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

export default function MainNavigation() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleClick() {
    setMobileNav((prev) => !prev);
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
        <ul className={mobileNav ? "active" : ""}>
          <li>
            <Link to="/mercury">Mercury</Link>
          </li>
          <li>
            <Link to="/venus">Venus</Link>
          </li>
          <li>
            <Link to="/earth">Earth</Link>
          </li>
          <li>
            <Link to="/mars">Mars</Link>
          </li>
          <li>
            <Link to="/jupiter">Jupiter</Link>
          </li>
          <li>
            <Link to="/saturn">Saturn</Link>
          </li>
          <li>
            <Link to="/uranus">Uranus</Link>
          </li>
          <li>
            <Link to="/neptune">Neptune</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
