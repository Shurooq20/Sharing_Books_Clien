import React from 'react';
import Star from '../Star';

function StarRating({ max, rating }) {
  const stars = []
  for(let i = 0; i < max; i++) {
    if (i < rating) {
      stars.push(
        <Star key={i} style={{color: 'yellow', width: '30px'}}/>
      )
    } else {
      stars.push(
        <Star key={i} style={{color: 'lightgrey', width: '30px'}}/>
      )
    }
  }
  return(
    <div className='stars'>
      { stars }
    </div>
  )
}

export default StarRating