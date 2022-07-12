import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useNavigate, Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from "../StateProvider";
import './Header.css'

export default function Navbar(){
    const [ { cart }, dispatch ] = useStateValue();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        return navigate('/');
    }
    return (
        <>
<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
  <div className="container-fluid ">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="fas fa-bars"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <a className="navbar-brand mt-2 mt-lg-0" href="/">
        <img
          src="https://s3.amazonaws.com/thumbnails.venngage.com/template/fc8535df-be09-4c80-8ea5-a69a34b2318e.png"
          height="40"
          alt="S-Mart"
          loading="lazy"
        />
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/user/header">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/header">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/header">Products</a>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center">
    <span className="badge rounded-pill badge-notification bg-danger">{ cart.length }</span>
    <Link to={"/user/cart"} className="me-3"><AddShoppingCartIcon /></Link>
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
        <AccountCircleIcon className="rounded-circle"/>
        </a>
        {/* <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
          </li>
        </ul> */}
      </div>
      <ul className="navbar-nav me-3 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link cursor-pointer" href="#" onClick={logout}>Log Out</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
<div style={{marginBottom:"3.8em"}}></div>
        </>
        )
    }
