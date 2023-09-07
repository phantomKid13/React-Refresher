import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link className="nav-link active" to="./">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="./">Action</Link></li>
                <li><Link className="dropdown-item" to="./">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="./">Something else here</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" name="search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        <div className="form-check form-switch ms-5">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
            <label className="form-check-label small text-light" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
  )
}
