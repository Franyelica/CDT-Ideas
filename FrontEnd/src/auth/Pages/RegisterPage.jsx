import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Loader from '@/components/layout/Loader'
import MetaData from '@/components/layout/MetaData'
import { register, clearErrors } from '../../actions/userActions'
import { useNavigate, Link } from 'react-router-dom';
import "../CSS/StyleReg.css"
import LogoCDT from '@/images/logo.png';
import CloseIcon from '@/components/icons/CloseIcon';


const RegisterPage = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = user;

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

    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);

    dispatch(register(formData))
  }

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <Fragment>
      <MetaData title={'Registro de usuario'} />
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /> */}

      <div class="background-container"></div>
      <div class="ImgLogo">
        <Link className='LinkCl' to="/">
          <img src={LogoCDT} alt="Logo CDTIdeas" className='LogoRegistro' />
        </Link>
      </div>
      <button className='RegVolverI'>
        <Link to="/"><CloseIcon /></Link>
      </button>


      <div class="RegistrationContainer">
        <h3 class="H3Regis">Regístrate</h3>


        <form class="FormRegistration" onSubmit={submitHandler} encType="multipart/form-data">
          <div class="form-group">
            <input type="name" name="name" required value={name} onChange={onChange} placeholder="Nombre" class="FormReg" />
          </div>

          <div class="form-group">
            <input type="email" name="email" required value={email} onChange={onChange} placeholder="Correo electrónico" class="FormReg" />
          </div>

          <div class="form-group">
            <input type="password" name="password" required value={password} onChange={onChange} placeholder="Contraseña" class="FormReg" />
          </div>

          <div class="form-groupCheck">
            <input type="checkbox" required className='checkForm' />
            <span>
              Acepto los <a href="#" class="text-[#2D3073] font-semibold">Términos de uso</a> & <a href="#" class="text-[#2D3073] font-semibold">Política de privacidad</a>
            </span>
          </div>

          <button type="submit" disabled={loading ? true : false} class="btn-submit">
            Registrarse
          </button>
        </form>
        <div class="haveAccount">
          <p class="text-sm font-normal text-black py-2">
            ¿Ya tienes una cuenta?
            <span class="cursor-pointer font-semibold underline underline-offset-2 hover:text-[#484db1]">
              <a href="/auth/login">Inicia sesión</a>
            </span>
          </p>
        </div>
      </div>

    </Fragment>

  )
}
export default RegisterPage