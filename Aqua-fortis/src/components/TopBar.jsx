
import "../styles/TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";




function TopBarItem({ icon, text }) {
  return (
    <div className="top-bar-item">
      <span className="top-bar-icon"><FontAwesomeIcon icon={icon} /></span>
      <span className="top-bar-text">{text}</span>
    </div>
  );
}

function TopBar(){
  const topBarItems=[
    {icon: faPhone, text: "+234 808 873 7339"},
    {icon: faClock, text: "Mon - Fri:  8:00 - 17:00"},
    {icon: faLocationDot, text: "144 Trans-Amadi Industrial Area, Port Harcourt"}
  ]

  return (
    <div className="top-bar">
        <div className="top-bar-left">
            {topBarItems.map((item) => (
              <TopBarItem key={item.text} icon={item.icon} text={item.text} />
            ))}
        </div>

        <div className="top-bar-right">
          <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
          <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
          <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    </div>
  )
}

export default TopBar;