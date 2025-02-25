import React, { useState, useEffect } from 'react';
import '../CSS/HomeSlider.css';
import slideOne from '../../images/slider_img1.jpg';
import slideTwo from '../../images/slider_img2.jpg';
import slideThree from '../../images/slider_img3.jpg';
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        slideOne,
        slideTwo,
        slideThree
    ];

    useEffect(() => {
        const nextSlide = (currentSlide + 1) % slides.length;

        const intervalId = setInterval(() => {
            setCurrentSlide(nextSlide);
        }, 2000); // Cambia de imagen cada 3 segundos (ajusta el valor según tus necesidades)

        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide]);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};
export default Slider;