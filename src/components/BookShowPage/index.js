import React, { useState, useEffect } from 'react'
// import { Redirect } from 'react-router-dom';
import BookDetails from '../BookDetails'
import ReviewIndexPage from '../ReviewIndexPage'
import { Redirect } from 'react-router-dom'
// import ReviewForm from '../ReviewForm'
import { Review } from '../../requests'
import { Book } from '../../requests'

function BookShowPage(props) {
  const [book, setBook] = useState({})

  const { id, categoryId } = props.match.params
  const currentUser = props.currentUser

  useEffect(() => {
    Book.one(id).then((book) => {
      setBook(book)
    })
  }, [])

  function deleteBook(id) {
    Book.delete(id).then(() => {
      setBook({})
      props.history.push('/books')
    })
  }

  function editBook(categoryId, id) {
    props.history.push({
      pathname: `/categories/${categoryId}/books/${id}/edit`,
      categoryId,
    })
  }

  const {
    title,
    author,
    rating,
    img2_url,
    link,
    description,
    created_at,
    owner,
  } = book

  if (currentUser) {
    return (
      <div className='show'>
        {id ? (
          <>
            <BookDetails
              id={id}
              title={title}
              author={author}
              rating={rating}
              img2_url={img2_url}
              link={link}
              description={description}
              created_at={created_at}
              owner={owner}
            />
            <button onClick={() => deleteBook(id)}>Delete</button>
            <button onClick={() => editBook(categoryId, book.id)}>Edit </button>

            <ReviewIndexPage id={id} />
          </>
        ) : null}
      </div>
    )
  } else {
    return <Redirect to='/sign_in' />
  }
}
export default BookShowPage
