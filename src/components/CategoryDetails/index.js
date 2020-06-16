import React from 'react';

function CategoryDetails({ id, name, img_url }) {
  return(
    <div>
      <h2>{ name }</h2>
      <br></br>
      <img src={img_url}/>

      
    </div>
  )
}

export default CategoryDetails