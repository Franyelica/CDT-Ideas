import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Loader from '@/components/layout/Loader'
import MetaData from '@/components/layout/MetaData'
import { login, clearErrors } from '../../actions/userActions'
import { useNavigate, Link } from 'react-router-dom';
import CloseIcon from '@/components/icons/CloseIcon';
import "../CSS/StyleLog.css"
import miImagen from '../../images/logo1.png';
import fondo from '../../images/background.png';
import LogoCDT from '@/images/logo.png';


const LoginPage = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const alert = useAlert();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  useEffect(() => {

    if (isAuthenticated) {
      Navigate('/')
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, isAuthenticated, error, Navigate])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={'Iniciar sesión'} />
          <div class="background-container"></div>
          <div className='ImgLogo2'>
            <Link className='LinkC2' to="/">
              <img src={LogoCDT} alt="LogoCDTIdeas" className='LogoInicioSesion' />
            </Link>
          </div>

          <button className='RegVolverII'>
          <Link to="/"><CloseIcon /></Link>
          </button>

          <div className='LoginContainer'>
            {/*<div className='logo'>
              <img className='Logo1' src={miImagen} alt="logo" />
      </div>*/}

            <h3 className='InSe'>Iniciar sesión</h3>
            <form class="FormLogin" onSubmit={submitHandler}>
              <div className="FormGen">
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="loginInf"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Contraseña"
                  className="loginInf"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>


              <div className="keep">
                <div className="select">
                  <input type="checkbox" className="" />
                  <spam className="sesion">Mantener sesión iniciada</spam>
                </div>
                <Link to="/password/forgot" className="">¿Olvidaste tu contraseña?</Link>
              </div>


              <div className="boton1">
                <button type="submit" className="iniciar">
                  Iniciar sesión
                </button>
              </div>

              <div className="announcement">
                <p className="crearCuenta">
                  ¿Aún no tienes una cuenta?{" "}
                  <span className="regLink">
                    <Link to="/auth/register">Regístrate ahora</Link>
                  </span>
                </p>

                {/*<img src={fondo} alt="fondo1" />*/}
              </div>
            </form>
          </div>

        </Fragment>
      )
      }
    </Fragment >
  )
}

export default LoginPage