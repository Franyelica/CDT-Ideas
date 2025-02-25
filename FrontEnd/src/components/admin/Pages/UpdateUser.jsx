import React, { Fragment, useState, useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { updateUser, getUserDetails, clearErrors } from '../../../actions/userActions'
import MetaData from '../../layout/MetaData'
import { Navigate, useNavigate } from "react-router-dom";
import { UPDATE_USER_RESET } from "../../../constants/userConstants";
import { useParams } from 'react-router-dom';


const UpdateUser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const { error, isUpdated } = useSelector(state => state.user);

    const { user } = useSelector(state => state.userDetails);
    const { id } = useParams();

    useEffect(() => {
        if (user && user._id !== id) {
            dispatch(getUserDetails(id))

        }
        else {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Usuario actualizado correctamente.')

            Navigate('/admin/users')

            dispatch({
                type: UPDATE_USER_RESET
            })
        }

    }, [dispatch, alert, error, Navigate, isUpdated, user, id])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('role', role);


        dispatch(updateUser(user._id, formData))
    }
    return (
        <Fragment>
            <MetaData title={"Actualizar usuario"} />
            <SideBar />

            <body>
                <div className="Welcome">
                    <h1>Actualizar usuario</h1><br />
                    <div className="RouteUser">
                        <ol>
                            <li><a href="/admin/dashboard"> Inicio/ </a></li>
                            <li>Actualizar usuario</li>
                        </ol>
                    </div>
                </div>
                <Fragment>
                    <div className="displayFormUser">
                        <form onSubmit={submitHandler} encType='multipart/form-data' className="FormUser">
                            <div className="ContainerFormU">
                                <div className="inputU">
                                    <label>Nombre usuario</label>
                                    <input type="text"
                                        id='nameu_field'
                                        className="Usuario"
                                        value={name}
                                        placeholder="Ingrese el nombre del usuario"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="inputU">
                                    <label>Email</label>
                                    <textarea
                                        type="text"
                                        id='email_field'
                                        className="Usuario"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="inputU">
                                    <label>Rol:</label>
                                    <select
                                        className="custom-select"
                                        id="category_field"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}>

                                        <option value="user">Usuario</option>
                                        <option value="admin">Admin</option>

                                    </select>
                                </div>
                            </div><br />
                            <button type='submit' className="BtnCreateUser">
                                Actualizar usuario
                            </button>

                        </form>
                    </div>
                </Fragment>

            </body>
        </Fragment>
    )
}

export default UpdateUser