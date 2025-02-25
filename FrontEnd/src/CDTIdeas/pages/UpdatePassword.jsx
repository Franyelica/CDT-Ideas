import React, { Fragment, useState, useEffect } from "react";
import MetaData from '../../components/layout/MetaData'
import { useNavigate, Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, clearErrors } from "../../actions/userActions";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import MainHeader from '@/components/header/mainHeader';
import "../CSS/StyleUserProfile.css"
export const UpdatePassword = () => {

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();
    const Navigate = useNavigate();


    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect(() => {


        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Contraseña actualizada correctamente.')

            Navigate('/me')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, alert, error, Navigate, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('password', password);


        dispatch(updatePassword(formData))
    }
    return (
        <Fragment>
        <MetaData title={'Actualizar contraseña'} />
        <MainHeader />
        <div className="TitlePerfil">
            <h4>Actualizar Contraseña </h4>
        </div>

        <form onSubmit={submitHandler}>
            <div className="Container-Generl">
                <div className="Profil">
                    <div className="CardUpdate">
                        <label htmlFor="email_field">Contraseña anterior</label>
                        <input
                            type="password"
                            id="name_field"
                            className="form-control"
                            name='name'
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            placeholder="Contraseña Anterior"
                            required
                        />
                    </div>
                    <div className="CardUpdate">    
                                <label htmlFor="email_field">Nueva contraseña</label>
                                <input
                                    type="password"
                                    id="email_field"
                                    className="form-control "
                                    name='email'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña Nueva"
                                    required
                                />
                    </div>

                    <button type="submit" className="btnUP" disabled={loading ? true : false} >Actualizar contraseña</button>

                </div>
                                    
            </div>
        </form>
    </Fragment>

    )
}

