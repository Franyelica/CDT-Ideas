import React, { Fragment } from "react";
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import MainHeader from '@/components/header/mainHeader';
import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'
import "../CSS/StyleUserProfile.css"

export const UserProfile = () => {

 
    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Tu perfil'} />
                    <MainHeader />
                    <div className="TitlePerfil">
                        <h4>Mi perfil</h4>
                    </div>
                    <div className="Container-Generla">
                        <div className="Profil">

                            <h4>Nombre:</h4>
                            <p>{user.name}</p>

                            <h4>Correo:</h4>
                            <p>{user.email}</p>

                            <h4>Fecha de registro:</h4>
                            <p>{String(user.createdAt).substring(0, 10)}</p>

                            {user.role !== 'admin' && (
                                <Link to="/orders/me" className="btnInterests">
                                    Mis intereses
                                </Link>
                            )}

                            <Link to="/password/update" className="btnPs">
                                Cambiar contraseña
                            </Link>
                            <Link to="/me/update" id="edit_profile" className="btnEditProfile">
                                Editar perfil
                            </Link>
                        </div>
                        
                    </div>
                </Fragment>

            )}
        </Fragment>
    )
}
