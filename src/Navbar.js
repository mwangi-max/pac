import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
     <NavLink to='/' className='links'>Home</NavLink>
     <NavLink to='/people'className='links'>People</NavLink>
     <NavLink to='/contacts' className='links'>Contacts</NavLink>

    </nav>
  )
}

export default Navbar
