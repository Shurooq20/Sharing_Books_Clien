import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const { currentUser } = props; // object destructuring
  return(
    <nav>
      <NavLink to='/categories'>categories Index</NavLink>
      | |
      <NavLink to='/categories/new'>New Category</NavLink>
      | |
      <NavLink to='/users/new'>Create User</NavLink>
      | |
      { !currentUser && <NavLink to='/sign_in'>Sign In</NavLink> }
      { currentUser && <span>{currentUser.first_name}</span>}
    </nav>
  )
}


export default NavBar