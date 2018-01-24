import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.css'

const Header = () => (
  <nav className="navbar navbar-light sticky-top "
  style={{background:"#e3e9f2"}}>
    <Link className="navbar-brand">
      <img src={require("./../../images/logo.png")} height="78px" className="d-inline-block align-top" alt="" />
    </Link>

    <div className="nav nav-pills flex-column flex-sm-row">
      <a className="flex-sm-fill text-sm-center nav-link active" href="#">
        Homepage
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">Contact</a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">Shop</a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        Smart Card
        </a>
    </div>
  </nav>
)

export default Header
