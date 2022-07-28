import React, { Fragment } from 'react';

const authenticatedOptions = (
  <>
  <a className="Name" href="/"> <h2 className="title">Beauty World </h2> </a>
    <div className="together">
      <a>Welcome Back! </a> 
     {/* <a>About Us</a> */}
      <div className="dropdown"><button className="dropbtn">Shoy By Category </button>
        <div className="dropdown-content">
        <a href="/products/skincare">Skincare</a>
        <a href="/products/bodycare">Bodycare</a>
        <a href="/products/haircare">Haircare</a>
        <a href="/products/fragrance">Fragrance</a>
        <a href="/products/makeup">Makeup</a>
        </div>
      </div>
      <a href="/favorites" > Your Favorites <i className="fa-regular fa-heart"></i> </a>
      <a href="/sign-out">Log Out</a>
    </div>
    
  </>
);


const alwaysOptions = (
  <>
    <a className="Name" href="/"> <h2 className="title">Beauty World </h2> </a>
      <div className="together">
        <div className="dropdown"><button className="dropbtn">Shop By Category </button>
          <div className="dropdown-content">
          <a href="/products/skincare">Skincare</a>
          <a href="/products/bodycare">Bodycare</a>
          <a href="/products/haircare">Haircare</a>
          <a href="/products/fragrance">Fragrance</a>
          <a href="/products/makeup">Makeup</a>
        </div>
      </div>
     {/* <a>About Us</a> */}
      <a href="/sign-in">Log In   <i className="fa-regular fa-user"></i></a>
    </div>

  </>
);

const Header = ({ user }) => (

  <div className="navbar">
        {/* {user && (
          // <span className="navbar-text mr-2">Welcome Back to  {user.email} BeautyLand</span>
          <a class="Name" href="/"> <h2 class="title">Beauty World </h2> </a>
        )} */}
        {user ? authenticatedOptions : alwaysOptions}
    </div>
);
    
export default Header;
