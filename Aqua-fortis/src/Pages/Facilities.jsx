import heroImg from '../assets/10001.png';
import '../App.css';

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
    <div className="center mb-16 relative isolate bg-cover bg-center bg-no-repeat overflow-hidden bg-green-950 text-white sm:py-12 lg:overflow-visible lg:px-0 lg:pt-10">
      <div className="hero">
        <img
          src={heroImg}
          className="base absolute inset-0 h-full w-full object-cover"
          width="170"
          height="179"
          alt=""
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-green-950/98 to-green-900/50"></div>

      <div className="container-site relative flex flex-col items-start min-h-[42vh] px-45 pb-5 pt-14 sm:min-h-38vh] sm:pd-16">
        <span className="small-text text-sm text-[#CFD8D2] uppercase font-semibold tracking-wider mb-2">
          our facilities
        </span>

        <h2 className="section-header text-5xl max-w-4xl font-semibold leading-tight mb-8">
          Training centres built around real workplace competence.
        </h2>

        <p className="section-text text-[#C3CEC6] text-lg max-w-3xl tracking-wide">
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
    <div className="facilities-text-box grid grid-cols-4 gap-10 px-50 py-12 items-center">
      <h3 className="facilities-title text-2xl font-black text-[#1F8F36]">
        {props.title}
      </h3>

      <div className="description-text-box col-span-2">
        <p className="facilities-description text-base mb-5 text-[#5C5C5C] tracking-wide">
          {props.description}
        </p>

        <p className="facilities-small-text text-[#1F8F36] text-base tracking-normal">
          {props.smallText}
        </p>
      </div>

      <a
        href="#"
        className="facilities-link ml-20 bg-[#1F8F36] text-white max-w-30 text-center text-base px-2 py-3 rounded-sm hover:bg-[#135a21]"
      >
        {props.link}
      </a>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact mt-5 px-35 py-30">
      <div className="contact-section flex gap-5">
        <div className="contact-head-text">
          <span className="contact-small-text text-[#D4451F] text-sm uppercase font-bold">
            quality focus
          </span>

          <h3 className="contact-title text-[#0D3D1A] text-4xl max-w-lg font-black mt-4 leading-tight">
            Training without compromise.
          </h3>
        </div>

        <div className="contact-text-box text-[#5C5C5C] text-base max-w-2xl tracking-normal">
          <p className="contact-text mb-5">
            Programme titles reflect Aqua Fortis training offerings as
            published in our corporate profile. Where international frameworks
            (such as NEBOSH or ASNT pathways) are referenced historically,
            current delivery arrangements and any partner-centre requirements
            are confirmed per cohort.
          </p>

          <p className="contact-text mb-13">
            Visit or write to us in Port Harcourt to discuss classroom
            capacity, practical drill arrangements, and corporate cohort
            scheduling.
          </p>

          <a
            href="#"
            className="contact-link text-[#1F8F36] text-base border-gray-300 border-1 px-8 py-4 rounded-sm hover:bg-[#1F8F36] hover:text-white"
          >
            Contact the training team
          </a>
        </div>
      </div>
    </div>
  );
}

export default Facilities