import React, { Fragment, useState, useEffect } from "react";
import MetaData from '../../components/layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from "../../actions/userActions";
import MainHeader from '@/components/header/mainHeader';
import { useNavigate, Link, useParams } from 'react-router-dom';


export const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const alert = useAlert();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const {token} = useParams();

    const { error, success } = useSelector(state => state.forgotPassword);

    useEffect(() => {


        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Contraseña actualizada correctamente.')
            Navigate('/auth/login')
        }

    }, [dispatch, alert, error, success,Navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);


        dispatch(resetPassword(token,formData))
    }
    return (
        <Fragment>
            <MetaData title={'Actualizar nueva contraseña'} />
            <MainHeader />
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-auto">
                        <h4 className="fw-bold fs-4">Actualizar nueva contraseña</h4>
                    </div>
                </div>
            </div>
            <form onSubmit={submitHandler}>
                <div className="container">
                    <div className="row justify-content-md-center user-info mt-3">


                        <div className="col-md-3 mt-3">
                            <label htmlFor="email_field">Nueva contraseña</label>
                            <input
                                type="password"
                                id="name_field"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 mt-3">
                            <label htmlFor="email_field">Confirmar contraseña</label>
                            <input
                                type="password"
                                id="name_field"
                                className="form-control"
                                name='Confirmpassword'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>




                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-md-center user-info mt-3">

                        <div className="col-md-3 mt-3">
                            <button type="submit" className="btn btn-warning w-100 btn-block mt-4 mb-3" >Actualizar contraseña</button>

                        </div>
                    </div>
                </div>

            </form>
        </Fragment>


    )
}