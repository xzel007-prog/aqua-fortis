
import React from "react";
import CompanyProfile from "../components/folder/CompanyProfile";
import MissionVision from "../components/folder/MissionVision";
import ClientsIndustry from "../components/folder/ClientsIndustry";
import Competence from "../components/folder/Competence";
import CoreValues from "../components/folder/CoreValues";
import ContactLocations from "../components/folder/ContactLocations";
import aboutHero from "../assets/10001.png";
import "../styles/About.css";

function About() {
  return (
    <>
      <section
        className="about-us"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-content">
          <p>About the company</p>

          <h1>Our profile</h1>

          <div className="about-text">
            AquaFortis Nig. Ltd is established to render excellent and effective
            services to the oil and gas, Manufacturing industries, Government
            Agencies and to all corporate entities giving them a real value for
            their investment.
          </div>
        </div>
      </section>

       <CompanyProfile />
      <MissionVision />
      <ClientsIndustry />
      <Competence />
      <CoreValues />
      <ContactLocations />
    </>
  );
}

export default About;































































































































































































