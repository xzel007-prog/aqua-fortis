

import HeroCarousel from "../components/Hero.jsx"
import FocusSection from "../components/Focus.jsx";
import FacilitiesGallery from "../components/FacGallery.jsx";
import ProfileSection from "../components/Profile.jsx";
import TrainingGallery from "../components/TrainGallery.jsx";
import UpdateGallery from "../components/UpdateGallery.jsx";





function Home (){
    return (
        <section>
            <HeroCarousel />
            <FocusSection />
            <FacilitiesGallery />
            <ProfileSection />
            <TrainingGallery />
            <UpdateGallery />

        </section>
    )
}
export default Home;