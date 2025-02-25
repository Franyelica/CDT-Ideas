// import imgProduct1 from "@/images/image_product_example_1.jpg";
// import imgProduct2 from "@/images/image_product_example_2.jpg";
// import imgProduct3 from "@/images/image_product_example.jpg";
// import imgProduct4 from "@/images/image_product_example_3.jpg";
// import PrevIcon from "../icons/PrevIcon";
// import NextIcon from "../icons/NextIcon";
//import { Fragment, useState } from "react";
//import { Carousel } from 'react-bootstrap';
//import { useSelector } from 'react-redux';

import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import "../projects/css/SliderProjectStyles.css"
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//const array_imgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]
{/*const SlideProjects = () => {

  const { patent } = useSelector(state => state.patentDetails)


  // const [index, setIndex] = useState(0)

  // const handleClickNext = () => { 
  //   if(index === array_imgs.length - 1) return setIndex(0);
  //   setIndex(index + 1)
  // }
  // const handleClickPrev = () => { 
  //   if(index === 0) return setIndex(array_imgs.length - 1);
  //   setIndex(index - 1)
  // }


  return (

    <Fragment>
      <div className="SliderImg">
        <Carousel pause='hover'>
          {patent.images && patent.images.map(image => (
            <Carousel.Item key={image.public_id}>
              <img className="d-block w-100" src={image.url} alt={patent.title} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>


    </Fragment>
    // <section className='grid md:grid-cols-4 md:gap-4'>
    //     <div className="col-span-4 relative">
    //         <img src={array_imgs[index]} alt="" className="aspect-[16/12]" />
    //         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
    //           <button className="h-10 w-10 rounded-full bg-white grid place-items-center"
    //           onClick={handleClickPrev}>
    //             <PrevIcon/>
    //           </button>
    //           <button className="h-10 w-10 rounded-full bg-white grid place-items-center"
    //           onClick={handleClickNext}>
    //             <NextIcon/>
    //           </button>
    //         </div>
    //     </div>     
    //     <img src={imgProduct1} alt="" className="hidden md:block" /> 
    //     <img src={imgProduct2} alt="" className="hidden md:block" /> 
    //     <img src={imgProduct3} alt="" className="hidden md:block"/> 
    //     <img src={imgProduct4} alt="" className="hidden md:block"/> 
    // </section>
  );
};

export default SlideProjects;*/}

const NewSlideProjects = () => {
  const { patent } = useSelector(state => state.patentDetails);

  return (
    <Fragment>
      <div className="SliderImg">
        {patent.images && patent.images.length > 0 && (
          <img className="NewImage" src={patent.images[0].url} alt={patent.title} />
        )}
      </div>
    </Fragment>
  );
};

export default NewSlideProjects;