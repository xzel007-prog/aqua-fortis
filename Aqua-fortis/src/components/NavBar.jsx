import "../styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Aqualogo from "../assets/Aqualogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


function CoreValueItems({title}) {
  return (
    <div className="core-value-item">
      <span className="core-value-icon"><FontAwesomeIcon icon={faCircleCheck} /></span>
      <h4 className="core-value-title">{title}</h4>
      <p className="core-value-label">CORE VALUE</p>

    </div>
  )
}


function NavBar({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const coreValues = [
    {title: "Excellence"},
    {title: "Integrity"},
    {title: "Professionalism"}
  ]

  
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Aqualogo} alt="Aqua Fortis Nigeria Limited" className="navbar-logo-image"/>
      </div>

      <div className="navbar-core-values">
        {coreValues.map((value) => (
          <CoreValueItems key={value.title} title= {value.title}/>
        ))}
      </div>
      
      <div className="navbar-right">
        <div className="navbar-course">
        <p>FIND A COURSE</p>
      </div>

      <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}aria-label="Toggle Menu">
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>


        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{link.label}
              </Link>
            ))}
            <button className="mobile-menu-course">FIND A COURSE </button>
          </div>
        )}
    </div>
  );
}

export default NavBar;
