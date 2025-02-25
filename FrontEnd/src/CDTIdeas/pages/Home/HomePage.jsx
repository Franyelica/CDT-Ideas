import MainHeader from '@/components/header/mainHeader';
import MetaData from '@/components/layout/MetaData'
{/*import { HomeSlider } from './HomeSlider';*/ }
import { HomeNewViewProject } from './HomeNewViewProject.1';
import { HomeCard } from './HomeCard';
import { HomeNewsletter } from "./HomeNewsletter"
import { HomeSlider } from './HomeSlider';
import "../../../auth/CSS/StyleHome.css"
import { HomeFooter } from './HomeFooter';



export const HomePage = () => {
  return (
    <>
      <MetaData title={'Inicio'} />
      <MainHeader />

      {/*---------------SECCIONES--------------------------*/}

      {/*Section view slider and view project*/}
        <HomeSlider />
      {/*Section view a new proyect*/}
        <HomeNewViewProject />
      {/*Section view*/}
        {/*<HomeNewsletter />*/}
      {/*Section view*/}
    
        <HomeCard />
        <HomeFooter />

    </>


  )
}
