import React from 'react';

export default function CategoryForm({ createCategory }) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    createCategory({
      name: formData.get('name'),
      img_url: formData.get('img_url'),
    })
  }

  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Name</label>
        <input type='text' name='name'/>
      </div>
      <div>
        <label htmlFor='img_url'>img_url</label>
        <textarea type='img_url' name='img_url'/>
      </div>
    
      <div>
        <input type='submit' value='Create Product'/>
      </div>
    </form>
  )
}