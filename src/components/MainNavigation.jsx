import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <Link to="">
        <h2>The Planets</h2>
      </Link>
      <nav>
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
      </nav>
    </header>
  );
}