import heroImg from '../assets/10001.png';
import '../styles/Facilities.css';

function Facilities() {
  return (
    <div>
      <Hero />

      <About
        title="Aquafortis Training Centre (ATC)"
        description="Our Port Harcourt hub for scheduled open courses, classroom instruction, and competence assessments."
        smallText="HSE competence · Fire · First aid · Industrial modules"
        link="Enquire"
      />

      <About
        title="In-Plant Training Unit (IPT)"
        description="Mobile instructor teams that deploy to client sites, yards, and plants across Nigeria for private cohorts."
        smallText="Corporate batches · Site-specific risks · Shutdown windows"
        link="Enquire"
      />

      <About
        title="Emergency Response Pathways (ERP)"
        description="Practical emergency and survival-oriented modules, including partner-facility arrangements where specialised equipment is required."
        smallText="Fire grounds · Survival modules · Offshore pathways"
        link="Enquire"
      />

      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <div className="facilities-hero">
      <div className="facilities-hero-image">
        <img
          src={heroImg}
          className="facilities-hero-image-base"
          width="170"
          height="179"
          alt=""
        />
      </div>

      <div className="facilities-hero-overlay"></div>

      <div className="facilities-hero-content">
        <span className="facilities-eyebrow">
          our facilities
        </span>

        <h1 className="facilities-hero-title">
          Training centres built around real workplace competence.
        </h1>

        <p className="facilities-hero-description">
          Like leading Port Harcourt safety academies, Aqua Fortis delivers
          through a dedicated training hub, in-plant deployment capacity, and
          emergency/survival pathways—including partner facilities where
          specialised equipment is required.
        </p>
      </div>
    </div>
  );
}

function About(props) {
  return (
    <div className="facilities-text-box">
      <h3 className="facilities-title">
        {props.title}
      </h3>

      <div className="description-text-box">
        <p className="facilities-description">
          {props.description}
        </p>

        <p className="facilities-small-text">
          {props.smallText}
        </p>
      </div>

      <a
        href="#"
        className="facilities-link"
      >
        {props.link}
      </a>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-head-text">
          <span className="contact-small-text">
            quality focus
          </span>

          <h3 className="contact-title">
            Training without compromise.
          </h3>
        </div>

        <div className="contact-text-box">
          <p className="contact-text contact-text-first">
            Programme titles reflect Aqua Fortis training offerings as
            published in our corporate profile. Where international frameworks
            (such as NEBOSH or ASNT pathways) are referenced historically,
            current delivery arrangements and any partner-centre requirements
            are confirmed per cohort.
          </p>

          <p className="contact-text contact-text-second">
            Visit or write to us in Port Harcourt to discuss classroom
            capacity, practical drill arrangements, and corporate cohort
            scheduling.
          </p>

          <a
            href="#"
            className="contact-link"
          >
            Contact the training team
          </a>
        </div>
      </div>
    </div>
  );
}

export default Facilities