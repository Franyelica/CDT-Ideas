import MainHeader from '@/components/header/mainHeader';
import ProjectCard from "@/components/Patent-card/ProjectCard"
import Searchfilters from "@/components/search-filters/Searchfilters"
import MetaData from '@/components/layout/MetaData'


export const PatentsPage = () => {

  return (
    <>
      <MetaData title={'Listado de patentes'} />
      <MainHeader />
      <div>
        <div className="mx-auto max-w-[1640px] justify-center">
          <Searchfilters/>
          <ProjectCard />   
        </div>
      </div>

    </>

  );
}
