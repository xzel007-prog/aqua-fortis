
import { Link } from "react-router-dom";

import "../styles/TrainingGallery.css";

import image8 from "../assets/image8.png"
import image3 from "../assets/image3.png"
import image5 from "../assets/image5.png"
import image13 from "../assets/image13.png"
import image14 from "../assets/image14.png"
import image15 from "../assets/image15.png"

function TrainingGac ({image, title, description}) {
    return (
        <div className="trainig-gac-1">
            <img src={image} alt={title} />
            <h3 className="training-title-1">{title}</h3>
            <p className="training-descrp-1">{description}</p>
        </div>
    )
}


function TrainingLane (){
    
return (
    <div className="training-lane"
    style={{backgroundImage: `url(${image8})`}}>
        <div className="training-lane-overlay"></div>
        <div className="training-lane-content">
        <h4 className="training-lane-eyebrow">Training calendar</h4>
        <h2 className="training-lane-title">Ready to train with Aquafortis?</h2>
        <p className="training-lane-text">Request a copy of our current training calendar or ask our team to recommend the right open course or in-plant programme for your organisation.</p>
        <Link to="/training" className="l-more">Request Training Calender</Link>
        </div>
        
    </div>
);
}



function TrainingGallery (){

    const trainingGac = [
    {
        image:image8,
        title: "Health & Safety Courses",
        description: "Our Health & Safety courses equip onshore and offshore professional to build safer work routines and stronger site discipline"
    },
    {
        image:image3,
        title: "Fire Training – Courses",
        description: "Through our fire training pathways, we train delegates to think safety and respond with confidence when emergencies unfold."
    },
    {
        image:image5,
        title: "Offshore & Survival Modules",
        description: "BOSIET/offshore induction, HUET/survival pathways, and operational safety modules for teams mobilising to the field."
    },
    {
        image:image13,
        title: "Specialist Workforce Courses",
        description: "Role-specific programmes including food handlers, personal security awareness, and scaffolding/rigging awareness."
    },
    {
        image:image14,
        title: "Emergency Response Training",
        description: "Practical simulations and theoretical sessions designed to help teams take charge when emergencies unfold."
    },
    {
        image:image15,
        title: "Survival Training – Courses",
        description: "Water survival, HUET-style pathways, and offshore induction support arranged with suitable facilities for mobilising teams."
    },
]

return(
    <div>
        <h2 className="train-gac-h2">Training</h2>

        <div className="training-gac-grid">
            {trainingGac.map((item) => (
            <TrainingGac key={item.title} image={item.image} title={item.title} description={item.description} />
        ))}
        </div>

        <TrainingLane />
    </div>
)
}

export default TrainingGallery