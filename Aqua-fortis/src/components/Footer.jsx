import "../styles/Footer.css";
import Aqualogo from "../assets/Aqualogo.png"
import { Link } from "react-router-dom";


function FooterItems({ acronym, meaning }){
  return (
    <div className="footer-items">
      <div className="top-footer-items">
        <h4 className="footer-item-acronym">{acronym}</h4>
        <h4 className="footer-item-meaning">{meaning}</h4>
        <p className="date">+234 808 873 7339 · Mon – Fri, 08:00 – 17:00</p>
        <p className="address">144 Trans-Amadi Industrial Area (Opposite Michelin Nig Ltd),</p>
        <p className="footer-item-state">Port Harcourt, Rivers State</p>
      </div>
    </div>
  )
}


function FooterBottom (){
  return (
    <div className="down-footer-items">
        <div className="down-footer-items-up">
          <div className="down-footer-items-up1">
            <img src={Aqualogo} alt="Aqua Fortis Nigeria Limited" className="down-footer-logo" />
            <p className="down-footer-services">Fire Fighting · HSE · Emergency Preparedness</p>
            <p className="down-footer-motto">
              AquaFortis Nig. Ltd is a registered company in Nigeria based in Port Harcourt with a foreign affiliate (Atlantic Mineral & Petroleum Resources Inc.) as partners based in Houston Texas, it was founded by a team of experts in fire safety, fire training and fire engineering, Hazmat/Hazwoper training, process and production chemical, equipment leasing, foreign and local procurement amongst others
            </p>
            <p className="down-footer-email">
              www.aquafortis.com.ng
            </p>
          </div>

          <div className="down-footer-items-up2">
            <h3 className="footer-usefull-links">Useful Links</h3>
            <Link to="/about">About us</Link>
            <Link to="/training">Training</Link>
            <Link to="">Services</Link>
            <Link to="">Manpower Outsourcing</Link>
            <Link to="">Procurement Supplies</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="down-footer-items-up3">
            <h3 className="footer-training">Training</h3>
            <p className="footer-training-content"> Health & safety Courses</p>
            <p className="footer-training-content"> Fire Training - Courses</p>
            <p className="footer-training-content"> Offshore & Survival Modules</p>
            <p className="footer-training-content"> Special Workforce Courses</p>
          </div>

          <div className="down-footer-items-up4">
            <h3 className="footer-contact">Contact</h3>
            <p><strong>Office:</strong> 144 Trans-Amadi Industrial Area (Opposite Michelin Nig Ltd), Port Harcourt, Rivers State</p>
            <p><strong>Training:</strong> Road, Igwuruta, Port Harcourt, Rivers State</p>
            <p>info@aquafortis.com.ng</p>
            <p>+234 808 873 7339</p>
            <p>+234 805 210 2033</p>
            <p>Mon – Fri, 08:00 – 17:00</p>
            <Link
  to="/training"
  className="Footer-training-link"
>
  Book Training
</Link>
            
          </div>

        </div>


  {/* FOOTER SECTION */}
        <div className="down-footer-items-down">
          <p className="copyright">
            © 2026 Aqua Fortis Nigeria Limited. All rights reserved.
            </p>
          <p className="down-footer-name">
            www.aquafortis.com.ng · Port Harcourt · Fire fighting & HSE training
            </p>
        </div>
      </div>

  )
}

function Footer() {

  const footerContent = [
    {acronym: "ATC", meaning: "Aquafortis Training Centre"},
    {acronym: "IPT", meaning: "In-Plant Training Unit"},
    {acronym: "ERT", meaning: "Emergency Response Pathways"},

  ]
    

  return (
    <footer className="footer">
      <div className="footer-content">
        {footerContent.map((value) => (
          <FooterItems 
          key={value.acronym} 
          acronym={value.acronym} 
          meaning={value.meaning}/>
        ))}
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer;
