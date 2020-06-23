import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Iamges/logo_books_1.png'

function NavBar(props) {
  const { currentUser, signOut} = props

  

  return (
    <div className='nav_bar'>
      <div className='nav_img'>
        {' '}
        <img src={Logo} className='logo'></img>{' '}
      </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        &nbsp; &nbsp;
        <NavLink to='/categories'>Categories</NavLink>
        &nbsp; &nbsp;
        {/* <NavLink to='/categories/new'>New Category</NavLink> */}
        &nbsp; &nbsp;
        <NavLink to='/users/new'>Create User</NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        {currentUser ? (
          <>
            <span>{currentUser.first_name}</span>
            <NavLink to='/' onClick={signOut}>
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/sign_in'>Sign In</NavLink>
          </>
        )}
      </nav>
    </div>
  )
}

export default NavBar
