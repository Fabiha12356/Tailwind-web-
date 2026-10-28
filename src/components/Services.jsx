import React from 'react'
import "./Services.css"
export const Services = ({name, para,tittle}) => {
  return (
    <div className='py-5'>
        <h6>{name}</h6>
        <h1>{tittle}</h1>
        <p>{para}</p>
    </div>
  )
}
export default Services

