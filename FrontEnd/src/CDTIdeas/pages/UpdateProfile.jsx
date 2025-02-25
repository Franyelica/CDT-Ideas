import React, { Fragment, useState, useEffect } from "react";
import MetaData from '../../components/layout/MetaData'
import { useNavigate, Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from "../../actions/userActions";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import MainHeader from '@/components/header/mainHeader';
import "../CSS/StyleUserProfile.css"

export const UpdateProfile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const { user } = useSelector(state => state.auth);

    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect(() => {

        if (user) {
            setName(user.name);
            setEmail(user.email);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Su perfil se ha actualizado correctamente.')
            dispatch(loadUser());

            Navigate('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, Navigate, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);


        dispatch(updateProfile(formData))
    }



    return (
        <Fragment>
            <MetaData title={'Actualizar perfil'} />
            <MainHeader />
            <div className="TitlePerfil">
                <h4>Actualizar mi perfil</h4>
            </div>
            <form onSubmit={submitHandler} encType='multipart/form-data' className="formU">
                <div className="Container-Generl">
                    <div className="Profil">
                        <div className="CardUpdate">
                            <label htmlFor="email_field">Nombre:</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="CardUpdate">
                                    <label htmlFor="email_field">Correo:</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control "
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                        </div>
                        <button type="submit" className="btnUP" disabled={loading ? true : false}>Actualizar</button>
                    </div>
                </div>     
            </form>
        </Fragment>

    )
}
