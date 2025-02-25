import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../../layout/Loader'
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { allUsers, deleteUser, clearErrors } from '../../../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../../layout/MetaData'
import { useNavigate } from "react-router-dom";
import { DELETE_USER_RESET } from "../../../constants/userConstants";
import { useParams } from 'react-router-dom';
import "../css/StylePatentsList.css"

const UserList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, users } = useSelector(state => state.allUsers)
    const { error: deleteError, isDeleted } = useSelector(state => state.user);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }


        if (isDeleted) {
            alert.success('Usuario eliminado correctamente.')
            navigate('/admin/users')
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, navigate, isDeleted])

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }
    const filteredUsers = users && Array.isArray(users) ? users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())) : [];



    return (
        <Fragment>
            <MetaData title={"Todos los usuarios"} />
            <SideBar />
            <div className="Hello">
                <h1 >Todos los usuarios</h1><br />
                <div className="Route">
                    <ol>
                        <li ><a href="/admin/dashboard">Inicio /</a></li>
                        <li >Listado de Usuarios</li>
                    </ol>
                </div>
            </div>
            <div className="GeneralPatentsList">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar usuario..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="search-button">Buscar</button>
                </div>
                <a href="/admin/users/new"><button className="btnNewPatent">Nuevo usuario +</button></a>

                {loading ? <Loader /> : (
                    <div className="patent-list">
                        {filteredUsers.map(user => (
                            <div key={user._id} className="user-item">
                                <div className="user-details">
                                    <div className="user-id">ID usuario: {user._id}</div>
                                    <div className="user-name">Nombre: {user.name}</div>
                                    <div className="user-email">Correo: {user.email}</div>
                                    <div className="user-role">Rol: {user.role}</div>
                                </div>
                                <div className="actions">
                                    <Link to={`/admin/user/${user._id}`} className="btn btn-primary">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => deleteUserHandler(user._id)}>
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

export default UserList;
