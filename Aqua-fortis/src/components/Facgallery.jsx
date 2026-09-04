
import image8 from "../assets/image8.png"
import image9 from "../assets/image9.png"
import image10 from "../assets/image10.png"
import image11 from "../assets/image11.png"

import "../styles/FacilitiesGallery.css"

const Feature = {
    type: "featured",
    image: image8,
    eyebrow: "Featured Courses",
    title: "Advance your career with the right training.",
    description:
      "Are you in oil & gas, industrial operations, or marine support? We have the right courses you need to advance your career.",
    linkText: "More Courses",
    link: "https://aquafortis.com.ng/courses"

}

const facGallery = [
    {
        id: 2,
        image: image9,
        label: "General HSE"
    },
    {
        id: 3,
        image: image10,
        label: "HSE Competence Level 1, 2 and 3"
    },
    {
        id: 4,
        image: image11,
        label: "Basic Fire Fighting and Prevention"
    },

]

function FacilitiesGallery() {
  return (
    <section className="af-gallery">
      <div className="af-section-head">
        <span className="af-eyebrow af-eyebrow--dark">Where we work</span>
        <h2 className="af-section-title">Facilities &amp; field sites</h2>
      </div>

      <div className="af-gallery-grid">
        {/* Featured card — always goes in position 1 (the big bento cell) */}
        <div
          className="af-gallery-item af-gallery-item--1"
          style={{ backgroundImage: `url(${Feature.image})` }}
        >
          <div className="af-gallery-overlay">
            <span>{Feature.eyebrow}</span>
          </div>
        </div>

        {/* Regular images — fill positions 2, 3, 4 */}
        {facGallery.map((f, i) => (
          <div
            className={`af-gallery-item af-gallery-item--${i + 2}`}
            key={f.id}
            style={{ backgroundImage: `url(${f.image})` }}
          >
            <div className="af-gallery-overlay">
              <span>{f.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FacilitiesGallery;