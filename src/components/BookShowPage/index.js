import React, { useState, useEffect } from 'react'
import BookDetails from '../BookDetails'
import ReviewIndexPage from '../ReviewIndexPage'
import { Redirect } from 'react-router-dom'
// import ReviewForm from '../ReviewForm'
import { Review } from '../../requests'
import { Book } from '../../requests'
import '../../style/main.css'
import CategoryIndexPage from '../CategoryIndexPage'

function BookShowPage(props) {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)

  const { id, categoryId } = props.match.params
  const currentUser = props.currentUser


  useEffect(() => {
    Book.one(id).then((book) => {
      setBook(book)
    }).then(()=>{ 
        setLoading(true)

    })

  }, [id])

  function deleteBook(id) {
    Book.delete(id).then(() => {
      props.history.push(`/categories/${categoryId}`)
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

  console.log(book.first_name)

  if (loading) {
    if (currentUser) {
      return (
        <div className='show'>
          {id ? (
            <>
            <h1 className='book_club'> Book Club </h1>
            {/* <CategoryIndexPage/> */}
              <BookDetails
                book={book}
                id={id}
                title={title}
                author={author}
                rating={rating}
                img2_url={img2_url}
                link={link}
                description={description}
                created_at={created_at}
                first_name={owner.first_name}
                last_name={owner.last_name}
              />
              <button className="btn" onClick={() => deleteBook(id)}>Delete</button>
              <button className="btn" onClick={() => editBook(categoryId, book.id)}>
                Edit{' '}
              </button>

              <ReviewIndexPage id={id} />
            </>
          ) : null}
        </div>
      )
    } else {
      return <Redirect to='/sign_in' />
    }
  } return null
}
export default BookShowPage
