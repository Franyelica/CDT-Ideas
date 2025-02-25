import React, { Fragment, useState, useEffect } from "react";
import MetaData from '../../components/layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from "../../actions/userActions";
import MainHeader from '@/components/header/mainHeader';
import "../CSS/StyleUserProfile.css"

export const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();


    const { error, loading, message } = useSelector(state => state.forgotPassword);

    useEffect(() => {


        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)


        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);


        dispatch(forgotPassword(formData))
    }
    return (
        <Fragment>
            <MetaData title={'Actualizar contraseña'} />
            <MainHeader />
            <div className="TitlePerfil">
                <h4>Recuperar contraseña</h4>
            </div>
            <form onSubmit={submitHandler}>
                <div className="Container-Generl">
                    <div className="Profil">
                        <div className="CardUpdate">
                            <label htmlFor="email_field">Correo</label>
                            <input
                                type="email"
                                id="name_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btnUP" disabled={loading ? true : false} >Enviar correo</button>
                    </div>
                </div>
            </form>
        </Fragment>

    )
}
