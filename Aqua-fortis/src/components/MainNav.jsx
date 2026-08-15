import "../styles/MainNav.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function MainNav({navLinks}) {
  return (
    <div className="main-nav">
      <ul className="main-nav-list">
        {navLinks.map((link) => (
          <li key={link.path} className="main-nav-item">
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

    <div className="main-nav-search">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
    </div>
  );
}

export default MainNav;
