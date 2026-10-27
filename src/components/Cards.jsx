import React from 'react'
import "./Card.css"
export const Cards = ({name,para,img}) => {
  return (
  <div class="feature col py-3 inner-div" >
     <div class="feature-icon d-inline-flex align-items-center justify-content-center 
     text-bg-primary bg-gradient fs-2 mb-3 align-item-center">
            <img src={img} alt="" width={80} />
             </div>
              <h3 class="fs-2 text-body-emphasis">{name} </h3>
              <p>{para}</p>
                   <a href="#" class="icon-link"> Call to action
<svg class="bi" aria-hidden="true"><use xlink:href="#chevron-right"></use></svg> </a> 
</div>
  )
}
export default Cards 