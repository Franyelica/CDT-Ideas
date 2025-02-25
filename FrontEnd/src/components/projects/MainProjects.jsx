import DetailsProjects from "@/components/projects/DetailsProjects";
import SlideProjects from "@/components/projects/SlideProjects";
import React, { Fragment, useEffect, useState } from 'react'
import { getPatentDetails, clearErrors } from '../../actions/patentActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom';
import Loader from '../layout/Loader'
import MetaData from '@/components/layout/MetaData'


const MainProjects = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const { loading, error, patent } = useSelector(state => state.patentDetails)


  useEffect(() => {
    dispatch(getPatentDetails(id))

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error, id])

  return (
    <Fragment>

      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={patent.name} />
          {/*<main className="grid grid-cols-1 md:grid-cols-2">
            <SlideProjects />
            <DetailsProjects />
          </main>*/}
          <DetailsProjects />
        </Fragment>
      )}
    </Fragment>

  )
}

export default MainProjects;
