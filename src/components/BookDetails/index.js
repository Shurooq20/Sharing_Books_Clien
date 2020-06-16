import React from 'react'

function BookDetails({ id, title, author, rating, img2_url, link, description, created_at }) {
  
  return(
    <div>
      <h4>{ title }</h4>
      <h2>{ author }</h2>
      <img src={img2_url}/>
      <a href={link}>pdf_Book</a>
      <h1>{ description }</h1>
    </div>
  )
}

export default BookDetails
