
import {Link} from "react-router-dom"

import "../styles/UpdateGallery.css"

import image3 from "../assets/image3.png"
import image15 from "../assets/image15.png"
import image11 from "../assets/image11.png"
import image4 from "../assets/image4.png"

function GacUpdate ({date, description}) {
    return (
        <div className="gac-update-text">
            <p className="gac-update-date">{date}</p>
            <p className="gac-update-description">{description}</p>       
        </div>
    )
}

function EventGac ({image}) {
    return (
        <div className="event-gac-img">
            <img src={image} alt="event picture" />
        </div>
    )
}

function UpdateGallery (){

    const gacUpdate = [
        {
            date: "March 2026",
            description: "Corporate in-plant programmes available nationwide"
        },
        {
            date: "February 2026",
            description: "Emergency preparedness pathways open for enrolment"
        },
        {
            date: "January 2026",
            description: "Offshore induction support for mobilising teams"
        },
    ]

    const eventGac = [
        {
            image: image3
        },
        {
            image: image15
        },
        {
            image: image11
        }
    ]
return(
    
    <div className="update-gallery">
        <div className="update-gallery-posts">
            <div className="update-gallery-header">
                <h2 className="update-gallery-title">
                    Stay Updated</h2>
                <Link to="/contact" className="update-gallery-info">
                    usefull information →
                </Link>
            </div>
            {
                gacUpdate.map((update) => (
                    <GacUpdate 
                    key={update.date} 
                    date={update.date} 
                    description={update.description} />
                 ))
            }
        </div>

        <div className="update-gallery-pic">
            <h2 className="update-gallery-pic-title">
                Event Gallery
            </h2>
            {
                eventGac.map((event) => (
                    <EventGac
                    key={event.image}
                    image={event.image} />
                ))
            }
        </div>

        <div className="update-gac-pic3" style={{backgroundImage: `url(${image4})`}}>
            <div className="update-gac-pic3-overlay"></div>
            <h2 className="update-career">Career & Jobs</h2>
            <p className="update-career-descrp">Are you a fresh graduate or a professional looking to work in a fast-paced, safety-first environment? Aquafortis welcomes people who want to help industry think safety and work safely.</p>
            <Link to="/contact" className="open-positions">See Open Positions</Link>
        </div>
    </div>
)
}


export default UpdateGallery