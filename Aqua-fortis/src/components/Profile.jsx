
import { Link } from "react-router-dom";

import "../styles/profile.css";

function PhTx ({title, description}){
    return (
        <div className="ph-tx-items">
            <h3 className="ph-title">{title}</h3>
            <p className="ph-description">{description}</p>
        </div>
    )
}




function ProfileSection (){

    const txPh = [
    {
        title: "PH",
        description: "Port Harcourt head office"
    },
    {
        title: "TX",
        description: "Houston affiliate partner"
    },
    {
        title: "Fire",
        description: "Safety, training & engineering"
    },
    {
        title: "HSE",
        description: "Hazmat / Hazwoper & more"
    },
]

return(
    <div>
       <div className="m-profile">
            <p className="o-story">our story so far</p>
            <div className="profilesection">
                <div className="our-profile">
                    <h3 className="o-profile">Our Profile</h3>
                    <p className="o-descript">
                        AquaFortis Nig. Ltd is established to render excellent and effective services to the oil and gas, Manufacturing industries, Government Agencies and to all corporate entities giving them a real value for their investment. We want to be part of your success story, hence our identifying with you in providing world class services.
                    </p>
                    <Link to="/about" className="l-more">Learn more</Link>
                    <Link to="/training" className="e-courses">Explore courses</Link>
                </div>
                
                <div className="ph-tx-list">
                    {txPh.map((value) => (
                        <PhTx key={value.title} title={value.title} description={value.description}/>
                    ))}
                </div>
                
            </div>
        </div>

        
    </div>
)
}


export default ProfileSection