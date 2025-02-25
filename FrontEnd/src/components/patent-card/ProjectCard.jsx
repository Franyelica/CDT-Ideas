import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatents } from '../../actions/patentActions'
import Patent from '../patent/Patent'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router-dom';

const ProjectCard = ({ match }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('')

  const categories = [
    'Patente de invención',
    'Patente de modelo de utilidad'
  ]

  const alert = useAlert();

  const dispatch = useDispatch();

  const { loading, patents, error, patentsCount, resPerPage, filteredPatentsCount } = useSelector(state => state.patents)

  const { keyword } = useParams();

  useEffect(() => {

    if (error) {
      return alert.error(error)
    }

    dispatch(getPatents(keyword, currentPage, category));

  }, [dispatch, alert, error, keyword, currentPage, category])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

  let count = patentsCount;

  //En caso de no funcionar bien el paginador puede ser por esto--experimental
  count = filteredPatentsCount
  if (keyword) {
    count = filteredPatentsCount
  }

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>

          <section id="products">
            <div className='h-1 w-50 ml-5'>
              <h1 className='fw-bold fs-5'>Categorias</h1>

              <ul className='pl-0'>
                {categories.map(category => (
                  <li
                    style={{
                      cursor: 'pointer',
                      listStyle: 'none',
                    }}
                    key={category}
                    onClick={() => setCategory(category)
                    }

                  >

                    {category}

                  </li>
                ))}
              </ul>
            </div>
            <main /*className='max-w-[1165px] ml-5 mx-auto p-4 py-12 grid md:grid-cols-4 gap-4 pt-4'*/>

              {patents && patents.map(patent => (
                <Patent key={patent._id} patent={patent} />
              ))}
            </main>

            {resPerPage <= count && (
              <div className='d-flex justify-content-center mt-5'>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={patentsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={'Siguiente'}
                  prevPageText={'Anterior'}
                  firstPageText={'Primera'}
                  lastPageText={'última'}
                  itemClass="page-item"
                  linkClass="page-link"
                />

              </div>
            )}
          </section>





        </Fragment>
      )}
    </Fragment>


  )
}

export default ProjectCard
