import React from "react";
import Welcome from '../../Iamges/Back_book.jpg';

export const WelcomePage = (props) => (
    <div className='welcome'>
  <img className="welcome_img" src={Welcome} alt="welcome"/>
      <h1 className="welcome_heading">READING IS FUN </h1>
    </div>

);