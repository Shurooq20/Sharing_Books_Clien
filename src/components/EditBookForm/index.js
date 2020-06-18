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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Name Book</label>
        <input type='text' name='title' defaultValue={props.book.title}/>
      </div>
      <div>
        <label htmlFor='author'>Author</label>
        <input type='text' name='author' defaultValue={props.book.author} />
      </div>
      <div>
        <label htmlFor='img_url'>img_url</label>
        <textarea type='img_url' name='img2_url' defaultValue={props.book.img2_url} />
      </div>
      <div>
        <label htmlFor='link'>Link</label>
        <input type='text' name='link' defaultValue={props.book.link} />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input type='text' name='description' defaultValue={props.book.description} />
      </div>

      <div>
        <label htmlFor='rating'>Rating</label>
        <input type='number' min='1' max='5' name='rating' defaultValue={props.book.rating} />
      </div>

      <div>
        <input type='submit' value='Save' />
      </div>
    </form>
  )
}
return null
}
