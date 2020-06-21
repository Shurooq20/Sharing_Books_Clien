import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const { currentUser, signOut } = props;

  return(
    <nav>
      <NavLink to='/categories'>categories Index</NavLink>
      &nbsp; | &nbsp;
      <NavLink to='/categories/new'>New Category</NavLink>
      &nbsp; | &nbsp;
      <NavLink to='/users/new'>Create User</NavLink>
      &nbsp; | &nbsp;
      <NavLink to='/categories/:category_id/books/new'>Add your Book</NavLink>
      &nbsp; | &nbsp;
      { !currentUser && <NavLink to='/sign_in'>Sign In</NavLink> }
      { currentUser && <span>{currentUser.first_name}</span>}
      &nbsp; | &nbsp;
      <NavLink  to="/" onClick={signOut}>Sign Out</NavLink>
    </nav>
  )
}


export default NavBar