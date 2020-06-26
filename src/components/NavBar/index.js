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
      {/* <nav> */}
        <NavLink to='/'>Home</NavLink>
       
        <NavLink to='/categories'>Categories</NavLink>
       
        {/* <NavLink to='/categories/new'>New Category</NavLink> */}
       {!(currentUser) ? (<NavLink to='/users/new'>Sign Up</NavLink>): <p className='user_name'>{currentUser.first_name}</p>}
       
        {currentUser ? (
          <>
            <NavLink to='/' onClick={signOut}>
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/sign_in'>Sign In</NavLink>
          </>
        )}
      {/* </nav> */}
    </div>
  )
}

export default NavBar
