import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const linkStyle = {
  color: 'white',
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
<div class="container-fluid">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li><a id="len1" class="hoverable" style={linkStyle} href="/">Home</a></li>
        <li><a id="len2" class="hoverable" style={linkStyle} href="/">About</a></li>

        <li><a id="len4" class="hoverable" style={linkStyle} href="/sign-in">Log In</a></li>
      </ul>
    </div>
  </nav>
  <div id="what-the-hell-is-this">
    <div class="page-title">
      <h2>BeautyLand</h2>
    </div>
  </div>
</div>
  </>
);

const Header = ({ user }) => (

  <Navbar class ="nav" bg="black" variant="dark" expand="sm">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {user && (
          <span className="navbar-text mr-2">Welcome, {user.email}</span>
        )}
        {user ? authenticatedOptions : alwaysOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
