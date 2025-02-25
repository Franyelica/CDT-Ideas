import React from 'react'
import { Link } from 'react-router-dom'

export const NavLinkHeader = ({text, link}) => {
  return (
    <Link to={link} className='group py-6 relative'>
        <span className='group-hover:text-purple-300'>{text}</span>
        <span className='block scale-x-0 absolute bottom-0 left-0 w-full h-3 group-hover:scale-x-100 group-hover:bg-purple-300
        transition-all duration-300'></span>
    </Link>

  )
}

export default NavLinkHeader;
