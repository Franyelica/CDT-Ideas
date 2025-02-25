import LogoCDT from '@/images/logo.png';
import MenuIcon from '@/components/icons/MenuIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import UserCircle from '@/components/icons/UserCircle';
import { useState } from 'react';
import NavLinkHeader from './NavLinkHeader';
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import "./CSS/StyleHeader.css"

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


export const mainHeader = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Se ha cerrado la sesión correctamente.')
  }

  const { user, loading } = useSelector(state => state.auth)
  const [navClass, setNavClass] = useState("nav-cerrado");
  const [navClassMIN, setNavClassMIN] = useState("nav-cer");

  // Hacer lo mismo con la cadena que se pasa a la función setNavClass cuando se abre o se cierra el menú
  const handleOpenMenu = () => {
    setNavClass("nav-abierto");
  };
  const handleCloseMenu = () => {
    setNavClass("nav-cerrado");
  };
  const handleOpenMenuMIN = () => {
    setNavClassMIN("nav-abi");
  };
  const handleCloseMenuMIN = () => {
    setNavClassMIN("nav-cer");
  };


  // const [navClass, setNavClass] = useState(
  //   "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex md:gap-4 md:p-0"
  // );

  // const handleOpenMenu = () => {
  //   setNavClass("absolute bg-gray-300 top-0 gap-y-[21px] left-0 h-full flex flex-col md:flex p-8 font-subTittle font-bold md:mr-auto md:flex-row md:gap-4 w-2/3 md:static md:p-0 md:h-auto"
  //   );
  // };
  // const handleCloseMenu = () => {
  //   setNavClass(
  //     "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex md:gap-10 md:p-0"
  //   );
  // };


  return (
    <>
      <header className='header'>
        <button className='menu-button' onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <Link className='logo-link' to="/">
          <img src={LogoCDT} alt="Logo CDTIdeas" className='logo' />
        </Link>
        <nav className={navClass}>
          <button className='close-button' onClick={handleCloseMenu} >
            <CloseIcon />
          </button>
          <NavLinkHeader text="Inicio" link="/" />
          <NavLinkHeader text="Patentes" link="/projects" />
          <NavLinkHeader text="Nosotros" link="/our-team" />
          <NavLinkHeader text="Contacto" link="/contact-us" />
        </nav>
        <div className='user-section'>
          {user ? (
            <div className="dropdown">

              <button to="#" className='user-button' onClick={handleOpenMenuMIN}>
                <div className='UserCircle'><UserCircle /></div>
                <NavLinkHeader text={user && user.name} />
              </button> 

              <div className={navClassMIN}>
                  <button className='close-buttonMin' onClick={handleCloseMenuMIN} >
                    <CloseIcon />
                  </button>
                <Link to="/me" >Mi Perfil</Link>
                  {user && user.role !== 'admin' ? (
                    <hr className='hidden'></hr>

                  ) : (
                    <a href="/admin/dashboard" >Panel Administrativo</a>

                  )}
                <Link to="/" onClick={logoutHandler} >Cerrar Sesión</Link>
              </div> 
            </div>
          ) : !loading && <Link to="/auth/login">
            <button className='login-button'>
              Iniciar sesión
            </button>
          </Link>}

        </div>
      </header>
      {/* <span className='divider'></span> */}
    </>

  )
}


export default mainHeader;

