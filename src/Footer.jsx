import React from 'react'
import img1 from "./assets/img1.svg"
import img2 from "./assets/img2.svg"
import img3 from "./assets/img3.svg"
import img4 from "./assets/img4.svg"

import "./Footer.css"

export const Footer = () => {
  return (
   <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 px-3 px-sm-5 footerback m-0 text-white justify-content-between footer">
      <div className="col mb-3 ps-lg-5 w-25 adjust">
        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
          <h1 className="fw-bold text-white">NexOra</h1>
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <p className="fontwidth fw-light m-0">Copyright © 2026 Fabiha Sohail.</p>
        <p className="fontwidth fw-light m-0 pt-1">All rights reserved</p>
        <div className="mt-4">
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
          <h5 className="pb-4">Company</h5>
          <ul className="nav flex-column gap-2 fontwidth">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">About us</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Blog</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Contact us</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="pb-4">Support</h5>
          <ul className="nav flex-column gap-2 fontwidth">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Help center</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Terms of service</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Legal</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Privacy policy</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white fw-light">Status</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 offset-md-1 mb-3 p-0 m-0">
<form>
  <h5 className="pb-4">Stay up to date</h5>

  <div className="d-flex flex-column flex-sm-row w-100 img-adjust">
    <label htmlFor="newsletter1" className="visually-hidden">
      Your email address
    </label>

    <input
      id="newsletter1"
      type="email"
      className="form-control in grey border-0 w-100 text-white m-0 ro"
      placeholder="Your email address"
    />

    <img
      className="grey p-2 rounded-end"
      src="./images/Vector.svg"
      alt="Submit email"
    />
  </div>
</form>
        </div>
      </div>
    </footer>
  )
}
export default Footer