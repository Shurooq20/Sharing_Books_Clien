import React from 'react';

function CategoryDetails({ id, name, img_url }) {

  return(
    <div>
      <h2 className='category_header'>{ name }</h2>
      
      <img src={img_url}/>

    </div>
  )
}

export default CategoryDetails