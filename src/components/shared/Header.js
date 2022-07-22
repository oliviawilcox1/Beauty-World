import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const linkStyle = {
  color: 'black',
  textDecoration: 'none',
};
const authenticatedOptions = (
  <>
    <Nav.Item className="m-2">
      <Link to="favorites" style={linkStyle}>
        Favorites
      </Link>
    </Nav.Item>
    <Nav.Item className="m-2">
      <Link to="addProduct" style={linkStyle}>
        Add Product
      </Link>
    </Nav.Item>
    <Nav.Item className="m-2">
      <Link to="change-password" style={linkStyle}>
        Change Password
      </Link>
    </Nav.Item>
    <Nav.Item className="m-2">
      <Link to="sign-out" style={linkStyle}>
        Sign Out
      </Link>
    </Nav.Item>
  </>
);



const alwaysOptions = (
  <>
  
  <a class="Name" href="/"> <h2 class="title">Beauty World </h2> </a>

  <div class="together">
  <div class="dropdown"><button class="dropbtn">Categories </button>
    <div class="dropdown-content">
      <a >Skincare</a>
      <a>Haircare</a>
      <a>Fragrance</a>
      <a>Makeup</a>
    </div>
  </div>
  <a>About Me</a>
  <a href="/sign-in">Log In   <i class="fa-regular fa-user"></i></a>
  </div>
  </>
);

const Header = ({ user }) => (

  <div class="navbar">
        {user && (
          <span className="navbar-text mr-2">Welcome, {user.email}</span>
        )}
        {user ? authenticatedOptions : alwaysOptions}
    </div>
);

export default Header;
