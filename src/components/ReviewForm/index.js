import React from 'react'

export default function ReviewForm({ createReview }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)
    createReview({
      body: formData.get('body'),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='body'>Add Comment</label>
        <input type='text' name='body' />
      </div>

      <div>
        <input type='submit' value='Comment' />
      </div>
    </form>
  )
}
