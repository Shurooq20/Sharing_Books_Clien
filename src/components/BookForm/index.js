import React from 'react';

export default function BookForm({ createBook }) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    createBook({
      title: formData.get('title'),
      author: formData.get('author'),
      img2_url: formData.get('img2_url'),
      link: formData.get('link'),
      description: formData.get('description'),
      rating: parseInt(formData.get('rating'))
    })
  }

  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Name Book</label>
        <input type='text' name='title'/>
      </div>
      <div>
        <label htmlFor='author'>Author</label>
        <input type='text' name='author'/>
      </div>
      <div>
        <label htmlFor='img_url'>img_url</label>
        <textarea type='img_url' name='img2_url'/>
      </div>
      <div>
        <label htmlFor='link'>Link</label>
        <input type='text' name='link'/>
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input type='text' name='description'/>
      </div>
    
      <div>
        <label htmlFor='rating'>Rating</label>
        <input type='number'min='1' max='5' name='rating'/>
      </div>
    
      <div>
        <input type='submit' value='Create Product'/>
      </div>
    </form>
  )
}

