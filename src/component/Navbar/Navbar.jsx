import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <>
        
 <nav className="navbar navbar-expand-lg bg-info nav">
  <div className="container-fluid mx-5 fw-bolder">
        <Link className="navbar-brand fs-3" to="portfolio">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5  ">
        <li className="nav-item ">
          <Link className="nav-link " aria-current="page" to="star">PORTFOLIO</Link>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">CONTACT</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </>
      
    )
  }
}


