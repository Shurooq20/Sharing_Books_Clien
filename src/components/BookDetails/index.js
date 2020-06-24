import React from 'react'
import StarRating from '../StarRating';


function BookDetails({ id, title, author, rating, img2_url, link, description, created_at, owner}) {
  console.log(created_at, 'created_at')
  return(
    <div>
      <h1> Book Name : { title } </h1>
      <h2> Author: { author }</h2>
      <img src={img2_url} alt="" />
      <p></p>
      <a href={link}>pdf_Book</a>
      <h3>Description : { description }</h3>
      <StarRating max={5} rating={rating}/>
      <p></p>
  <small>Posted at: {new Date(created_at).toLocaleString()} By { owner.first_name} {owner.last_name}</small>
    </div>
  )
}

export default BookDetails
