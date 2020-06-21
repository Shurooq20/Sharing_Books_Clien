import React from 'react'
import StarRating from '../StarRating';


function BookDetails({ id, title, author, rating, img2_url, link, description, created_at }) {
  
  return(
    <div>
      <h1> Book Name : { title } </h1>
      <h2> Author: { author }</h2>
      <img src={img2_url} alt="" />
      <p></p>
      <a href={link}>pdf_Book</a>
      <h3>Description : { description }</h3>
      <StarRating max={5} rating={rating}/>
    </div>
  )
}

export default BookDetails
