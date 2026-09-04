import { useState, useEffect, useCallback, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import {Link} from "react-router-dom"

import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"

import "../styles/Hero.css"


const heroSlides = [
    {
        id: 1,
        image: image1,
        eyebrow: "Welcome To",
        title: "Aqua Fortis",
        caption: "Aqua Fortis Nigeria Limited delivers seminar, training, and demonstration programmes on fire fighting and safety—for industry, schools, and institutions across the Niger Delta. ",
        direction: "Learn More",
        buttonLink: "/"
    },

    {
    id: 2,
        image: image2,
        eyebrow: "",
        title: "Explore Our Courses",
        caption: "From Fire Watch and Interior & Exterior Fire Fighting to HSE, Hazmat, and first aid—we offer practical courses that prepare people to act when it matters.  ",
        direction: "Find A course",
        buttonLink: "/training"
    },

    {
        id: 3,
        image: image3,
        eyebrow: "Fire fighting & safety",
        title: "Seminar, training and demonstration",
        caption: "Hands-on fire fighting drills, extinguisher practice, and classroom instruction delivered at our Port Harcourt facilities or on client sites.  ",
        direction: "View Fire Courses",
        buttonLink: "/training"
    },

    {
       id: 4,
        image: image4,
        eyebrow: "Port Harcourt · Rivers State ",
        title: "Competence that protects people",
        caption: "HSE, risk assessment, welding and scaffold safety, oil spill containment, and related programmes for workplaces that cannot afford shortcuts.  ",
        direction: "Request A Proposal",
        buttonLink: "/contact"
    }    
]

function HeroCarousel ()  {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const timerRef = useRef(null);

    const count = heroSlides.length;

    const goTo = useCallback((next) => {
        setCurrentSlide(((next % count) + count) % count);
    }, [count]);

    const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % count
    );
  };


  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + count) % count
    );
  };

    useEffect(() => {
        if (isPaused) return;
        timerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % count);
            }, 4000);
            return () => clearInterval(timerRef.current);
            }, [isPaused, count]);
    
    const slide = heroSlides[currentSlide];

    return (
        <section className="af-hero"
        onMouseEnter={()=> setIsPaused(true)}
        onMouseLeave={()=> setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="Featured work"
        >
            {/* BACKGROUND SLIDE */}

            {heroSlides.map((slide, index) => (
                <div 
                key={slide.id}
                className={`af-hero-slide ${index === currentSlide ? "is-active" : ""}`}
                >
                    <div 
                    className="hero-image"
                    style={{ backgroundImage: `url(${slide.image})`}}></div>
                
                {/* arial-hidden={index !== index} */}
                </div>  
            ))}


            {/* CONTENT */}
        <div className="af-hero-scrim"></div> 

        <div className="af-hero-content" key={slide.id}>
            <p className="af-eyebrow">
                {slide.eyebrow}
            </p>
            <h1 className="af-hero-title">
                {slide.title}
            </h1>
            <p className="af-hero-caption">
                {slide.caption}
            </p>
            <Link to={slide.buttonLink} className= "af-hero-direction">{slide.direction}</Link>
        </div>
            
            <button 
            className="af-hero-arrow af-hero-arrow--prev" 
            onClick={prevSlide} 
            aria-label="Previous slide">
    <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* NEXT */}

            <button 
            className="af-hero-arrow af-hero-arrow--next" 
            onClick={nextSlide} 
            aria-label="Next slide">
    <FontAwesomeIcon icon={faChevronRight} />
            </button>

            {/* SLIDE INDICATORS */}

            <div className="af-hero-drops">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`af-drop ${index === currentSlide ? "is-active" : ""}`} 
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        
            
        </section>
    )
}

export default HeroCarousel