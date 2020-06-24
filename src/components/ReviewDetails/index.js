import React from 'react'


function ReviewDetails({ id, body, created_at, reviewer}) {
  

  return(
    <div>
      <h4>{ body }</h4>
      <p></p>
      <small>Posted at: {new Date(created_at).toLocaleString()} By {reviewer.first_name} {reviewer.last_name} </small>
    </div>
  )
}

export default ReviewDetails