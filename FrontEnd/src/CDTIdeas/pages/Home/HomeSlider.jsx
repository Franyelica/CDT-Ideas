import React from 'react';
import '../../CSS/HomeViewSlider.css';
import Slider from '../../Script/ScriptSlider.jsx';
{/*import '../../Script/ScriptSlider';*/ }
{/*import slideOne from '../../../images/slider_img1.jpg';
import slideTwo from '../../../images/slider_img2.jpg';
import slideThree from '../../../images/slider_img3.jpg';*/}

export const HomeSlider = () => {
  return (
    <>
      {/*Slide Images */}
      <div className="viewSliderProject">
        <Slider />
        {/*<div className="projectSlider ">
          <img className="mySlides" src={slideOne} />
          <img className="mySlides" src={slideTwo} />
          <img className="mySlides" src={slideThree} />
        </div>*/}

        {/*Project Description*/}
        <div className="projectDescription">
          <h1 className="project-Title">FINANCIA PROYECTOS ARTÍSTICOS</h1>
          <p className="project-Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Sed quis leo quis
            nisi aliquet tincidunt. Morbi euismod,
            lorem <br />at sagittis tincidunt, massa nisl sagittis leo, id ultrices augue<br /> arcu vitae justo.
          </p>
          <a href='/projects'>
            <button className="projects-buttom">Ver proyectos</button>
          </a>
        </div>
      </div>
    </>
  );
}