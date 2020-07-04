import React,{ useState } from 'react'


export default function ReviewForm({ createReview }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)
    createReview({
      body: formData.get('body'),
    })
    setBody("")
  }

  const [body, setBody] = useState('')

  function handlechange(event){
    setBody(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='review'>
        <label htmlFor='body'>Join the discussion </label>
        <input onChange={ handlechange } value={body} type='text' name='body' />
      </div>

      <div>
        <input className="btn" type='submit' value='submit' />
      </div>
    </form>
  )
}
