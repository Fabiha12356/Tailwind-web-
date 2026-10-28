import React from 'react'
import img1 from "./assets/img1.svg"
import img2 from "./assets/img2.svg"
import img3 from "./assets/img3.svg"
import img4 from "./assets/img4.svg"

import "./Footer.css"

export const Footer = () => {
  return (
    <>
   <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6 
   py-5 px-5 px-sm-5 footerback m-0 text-white  footer ">
      <div className="col mb-3 ps-lg-5 w-25 adjust">
        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
          <h1 className="fw-bold text-white">NexOra</h1>
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <p className="fontwidth fw-light m-0 text">Copyright © 2026 Fabiha Sohail.</p>
        <p className="fontwidth fw-light m-0 pt-1 text">All rights reserved</p>
        <div className="mt-4 d-flex">
          <a href="#" className="grey rounded-5 py-1 px-2 me-2">
            <img src={img1}/></a>
          <a href="#" className="grey rounded-5 py-1 px-2 me-2">
            <img src={img2}/></a>
          <a href="#" className="grey rounded-5 py-1 px-2 me-2">
          <img src={img3}/></a>
          <a href="#" className="grey rounded-5 py-1 px-2 me-2">
            <img src={img4}/></a>
        </div>
      </div>
      <div className="w-50 d-flex p-0 work">
        <div className="col mb-3 ul-width">
          <h5 className="pb-4">Services</h5>
          <ul className="nav flex-column gap-2 fontwidth">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Web Development</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Mobile App</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">UI/Ux design</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Digital Marketing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">SEO</a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="pb-4">Company</h5>
          <ul className="nav flex-column gap-2 fontwidth">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">About</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Services</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Portfolio</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 offset-md-1 mb-3 p-0 m-0">
<form>
  <h5 className="pb-4">Subscribe</h5>
  <p className='text'>Get the lastest update and news Striaght to your inbox</p>

  <div>
    <label htmlFor="newsletter1" className="visually-hidden">
      Your email address
    </label>

    <input
      id="newsletter1"
      type="email"
      className="form-control in grey border-0 w-100 text-white m-0 ro"
      placeholder="Your email address"
    />
  </div>
</form>
        </div>
      </div>
    </footer>
     <div className='lastfooter'>
          <p className='text'>© 2026 Fabiha Sohail.</p>
          <p className='text'>Privacy Policy | Term & condition</p>
        </div>
        </>
  )
}
export default Footer