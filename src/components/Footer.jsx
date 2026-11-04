import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="row g-4 mx-auto footer-content">
        <div className="col-12 col-md-6 col-lg-5 text-start">
          <div className="d-flex justify-content-start align-items-center gap-2">
            <FontAwesomeIcon icon={faTruckFast} size="2x" />
            <h2 className="mb-0">DailyCart</h2>
          </div>
          <p>
            Designed and built with all the love in the world by the
            Luminar team with the help of our contributors.
          </p>
          <p>Code Licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently V5.3.2.</p>
        </div>
        <div className="col-12 col-md-6 col-lg-2 text-start">
          <h3>Links</h3>
          <h5>Home</h5>
          <h5>Wishlist</h5>
          <h5>Cart</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-2 text-start">
          <h3>Guides</h3>
          <h5>React</h5>
          <h5>React Bootstrap</h5>
          <h5>React Router</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-start">
          <h3>Contact Us</h3>
          <div className="d-flex align-items-center">
            <input type="email" placeholder="Enter your email" className="form-control w-75" />
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          </div>
          <div className="d-flex align-items-center gap-4 mt-4">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>
      </div>
      <p className="text-center fw-bold mt-5 mb-0">
        &copy; 2026 Octobur DailyCart. Built with React Redux.
      </p>
    </footer>
  )
}

export default Footer
