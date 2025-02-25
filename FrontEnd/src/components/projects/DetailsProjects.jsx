import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "../projects/css/DetailsProjectStyles.css"
import SlideProjects from "@/components/projects/SlideProjects";
import CloseIcon from '@/components/icons/CloseIcon';
import { Link } from 'react-router-dom';

const ProductDetails = ({ match }) => {

  const { patent } = useSelector(state => state.patentDetails)
  return (
    <Fragment>



      <div className='BotonVolver'>
        <button className='closebtn'>
          <Link to={"/projects"}><CloseIcon /></Link>
        </button>
      </div>
      <div className='NewDetailsProject'>
        <SlideProjects />

        <section className='DetailsContainer'>
          <div className='Description'>
            <h1>{patent.name}</h1>
            <p className='product_id'>Identificador de proyecto: {patent._id}</p>
            <div className='category'>
              <button className='patent_category'>{patent.category}</button>
            </div>

            <p className='Patent_Description'>{patent.description}</p>
            <p className='patent_Country'>{patent.Country}</p>
          </div>

        </section>
      </div>

    </Fragment>

  )
}
export default ProductDetails;
