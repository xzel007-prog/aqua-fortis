import {Link} from "react-router-dom"

import "../styles/Focus.css"

import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image8 from "../assets/image8.png"



const focusAreas = [
    {
        id: 1,
        title: "Training without Compromise",
        image: image5,
        blurb: "100% Quality Focused"
    },
    {
        id: 2,
        title: "Manpower & Logistics",
        image: image6,
        blurb: "Highly Trained Support Staff"
    },
    {
        id: 3,
        title: "In-Plant Delivery",
        image: image8,
        blurb: "Train where your teams work"
    },
]

function FocusSection (){
    return(
     <section className="af-focus">

            {/* SECTION HEADING */}

        <div className="af-section-head">
            <div>
                <span className="af-eyebrow af-eyebrow--dark">
                    what we do
                </span>

                <h2 className="af-section-title">
                    Built around <span>your needs</span>
                </h2>
            </div>

            <p className="af-section-intro">
                We combine professional expertise, trained personnel, and practical delivery to provide safety solutions that work in the real world.
            </p>
            
        </div>

                {/* FOCUS CARD */}

            <div className="af-focus-grid">
                {focusAreas.map((f, index) => (
                    
                    <a href="#" className={`af-focus-card af-focus-card--${index + 1}`} key={f.id}>

                        {/* BACKGROUND IMAGE */}
                        <div className="af-focus-image" 
                        style={{
                            backgroundImage: `url(${f.image})`
                        }} />

                        {/* DARK OVERLAY */}
                        <div className="af-focus-overlay"/>

                        {/* NUMBER */}
                        <div className="af-focus-number">
                            0{f.id}
                        </div>
                        
                        {/* CONTENT */}
                        <div className="af-focus-body">
                            
                            <h3>{f.title}</h3>

                            <p>{f.blurb}</p>

                            <span className="af-focus-link">Explore
                                <span className="af-focus-arrow">↗</span>
                            </span>

                        </div>
                    </a>
                ))}
            </div>

     </section>   
    )
}

export default FocusSection