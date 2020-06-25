import React from 'react'
import StarRating from '../StarRating';


function BookDetails({ id, title, author, rating, img2_url, link, description, created_at, owner}) {
  console.log(created_at, 'created_at')
  return(
    <div className='book_show_page'>
      <img src={img2_url} alt="" className='img_book'/>
      <div className='book_info'>

        <h1 className='book_title'>  { title } </h1>
        <h2> By { author }</h2>
      <StarRating max={5} rating={rating}/>
     
      <a href={link} className='book_link'>Click to get this Book</a>
      <p>Description :</p> 
      <p>{ description }</p>
   
  <small>Posted at: {new Date(created_at).toLocaleString()} By { owner.first_name} {owner.last_name}</small>
  </div>
    </div>
  )
}

export default BookDetails
