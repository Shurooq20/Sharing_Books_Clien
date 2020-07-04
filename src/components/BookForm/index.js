import React from 'react'

export default function BookForm({ createBook }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)
    createBook({
      title: formData.get('title'),
      author: formData.get('author'),
      img2_url: formData.get('img2_url'),
      link: formData.get('link'),
      description: formData.get('description'),
      rating: parseInt(formData.get('rating')),
    })
  }

  return (
    <form className='book_form' onSubmit={handleSubmit}>
       {/* <h1 className='book_header'> Post your Book</h1> */}
     
        <label htmlFor='title'>Name Book</label>
        <input type='text' name='title' />
     
    
        <label htmlFor='author'>Author</label>
        <input type='text' name='author' />
    
     
        <label htmlFor='img_url'>img_url</label>
        <input  type='img_url' name='img2_url'/>
     
    
        <label htmlFor='link'>Link</label>
        <input type='text' name='link' />
    
      
        <label htmlFor='description'>Description</label>
        <textarea type='text' name='description'/>
     

      
        <label htmlFor='rating'>Rating</label>
        <input type='number' min='1' max='5' name='rating' />
     

    
        <input  className='book_button' type='submit' value='Share it now' />
    
    </form>
  )
}
