import React from 'react'
import "./Testimionals.css"
export const Testimionals = ({name,tittle,img,para}) => {
  return (

<div className="review-card">
  <div className="quote-mark">“</div>

  <p className="review-text">
   {para}
  </p>

  <div className="review-user">
    <img
      src={img} 
      width={45}
    />

    <div className="user-info">
      <h4>{name}</h4>
      <p>{tittle}</p>

      <div className="stars">★★★★★</div>
    </div>
  </div>
</div>
  )
}

export default Testimionals