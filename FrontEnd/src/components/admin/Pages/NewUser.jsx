import React, { Fragment, useState, useEffect } from "react";
import Loader from '../../layout/Loader'
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { register, clearErrors } from '../../../actions/userActions'
import MetaData from '../../layout/MetaData'
import { Navigate, useNavigate } from "react-router-dom";
import { REGISTER_USER_RESET } from "../../../constants/userConstants";
import "../css/StyleNewUser.css"

const NewUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState([]);

    const roles = [
        'Seleccione role de usuario',
        'Administracion',
        'Usuario'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, success } = useSelector(state => state.newUser)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            navigate('/admin/users')
            alert.success('Usuario creado correctamente.')
            dispatch({ type: REGISTER_USER_RESET })
        }

    }, [dispatch, alert, error, success, navigate])



    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('role', role);

        dispatch(register(formData))
    }

    return (
        <Fragment>
            <MetaData title={"Nuevo Usuario"} />
            <SideBar />
            <body >
                <div className="Welcome">
                    <h1 className="">Nuevo usuario</h1><br />
                    <div className="RouteUser">
                        <ol>
                            <li><a href="/admin/dashboard">Inicio /</a></li>
                            <li>Nuevo usuario</li>
                        </ol>
                    </div>
                </div>
                <Fragment>
                    <div className="displayFormUser">
                        <form onSubmit={submitHandler} encType='multipart/form-data' className="FormUser">
                            <div className="ContainerFormU">
                                <div className="inputU">
                                    <label>Nombre usuario:</label>
                                    <input
                                        type="text"
                                        id='nameu_field'
                                        className="Usuario"
                                        value={name}
                                        placeholder="Ingrese el nombre del usuario"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="inputU">
                                    <label>Email:</label>
                                    <textarea
                                        type="text"
                                        id='email_field'
                                        className="Usuario"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="inputU">
                                    <label>Rol:</label>
                                    <select className="custom-select" id="category_field" value={role} onChange={(e) => setRole(e.target.value)}>
                                        {roles.map(role => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                </div>


                            </div><br />
                            <button type='submit' disabled={loading ? true : false} className="BtnCreateUser">
                                Crear nuevo usuario
                            </button>
                        </form>
                    </div>


                </Fragment>
                {/* </div> */}
                {/* </div> */}
            </body >
        </Fragment >
    )
}

export default NewUser