import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../../layout/Loader'
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getAdminPatents, clearErrors, deletePatent } from '../../../actions/patentActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faSearch } from '@fortawesome/free-solid-svg-icons'
import MetaData from '../../layout/MetaData'
import { useNavigate } from "react-router-dom";
import { DELETE_PATENT_RESET } from "../../../constants/patentConstants";
import "../css/StylePatentsList.css";

const PatentList = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, patents } = useSelector(state => state.patents)
    const { error: deleteError, isDeleted } = useSelector(state => state.patent)

    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getAdminPatents());

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success('Patente eliminada correctamente.')
            navigate('/admin/patents')
            dispatch({ type: DELETE_PATENT_RESET })
        }
    }, [dispatch, alert, error, navigate, deleteError, isDeleted])

    const deletePatentHandler = (id) => {
        dispatch(deletePatent(id))
    }

    const filteredPatents = patents.filter(patent => patent.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Fragment>
            <SideBar />
            <MetaData title={"Todas las patentes"} />
            <div className="Hello">
                <h1 >Todas las patentes</h1><br />
                <div className="Route">
                    <ol>
                        <li ><a href="/admin/dashboard">Inicio /</a></li>
                        <li >Listado de patentes</li>
                    </ol>
                </div>
            </div>
            <div className="GeneralPatentsList">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar patente..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <a href="/admin/patent/new"><button className="btnNewPatent">Nueva patente +</button></a>
                {loading ? <Loader /> : (
                    <div className="patent-list">
                        {filteredPatents.map(patent => (
                            <div className="patent-item" key={patent._id}>
                                <div className="patent-details">
                                    <div className="patent-id">ID: {patent._id}</div>
                                    <div className="patent-name">Nombre: {patent.name}</div>
                                </div>
                                <div className="actions">
                                    <Link to={`/admin/patent/${patent._id}`} className="btn btn-primary">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => deletePatentHandler(patent._id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default PatentList
