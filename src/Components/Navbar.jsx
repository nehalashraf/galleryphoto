/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return <>
   <nav className="navbar navbar-expand-lg  ">
   <h3 className='text-white ms-3'>Photosen</h3>
  <div className="container px-4 text-center">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-auto" id="navbarNav">
      <ul className="navbar-nav ms-5">
      <li className="nav-item active">
          <Link className="nav-link  text-white" to='galleryphoto/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="galleryphoto/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="galleryphoto/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="galleryphoto/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="galleryphoto/contact">Contact</Link>
        </li>
      </ul>
    </div>
  <div className="social-links align-items-center">
    <a href="#"><i class="fa-brands fa-facebook"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-youtube"></i></a>
    </div>
  </div>
</nav>
  
  </>
}
