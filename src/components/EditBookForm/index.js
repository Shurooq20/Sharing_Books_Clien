import React from 'react'

export default function EditBookForm(props) {
  console.log(props.book)
  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)
    props.editBook({
      title: formData.get('title'),
      author: formData.get('author'),
      img2_url: formData.get('img2_url'),
      link: formData.get('link'),
      description: formData.get('description'),
      rating: parseInt(formData.get('rating')),
    })
  }

  if(props.book) {
  return (
    <form className='book_form' onSubmit={handleSubmit}>
     
        <label htmlFor='title'>Name Book</label>
        <input type='text' name='title' defaultValue={props.book.title}/>
     
    
        <label htmlFor='author'>Author</label>
        <input type='text' name='author' defaultValue={props.book.author} />
    
  
        <label htmlFor='img_url'>img_url</label>
        <textarea type='img_url' name='img2_url' defaultValue={props.book.img2_url} />
    
     
        <label htmlFor='link'>Link</label>
        <input type='text' name='link' defaultValue={props.book.link} />
   
     
        <label htmlFor='description'>Description</label>
        <input type='text' name='description' defaultValue={props.book.description} />
    

     
        <label htmlFor='rating'>Rating</label>
        <input type='number' min='1' max='5' name='rating' defaultValue={props.book.rating} />
     

   
        <input className='book_button' type='submit' value='Save' />
     
    </form>
  )
}
return null
}
