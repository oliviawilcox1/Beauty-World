import React, { Fragment } from 'react';

const authenticatedOptions = (
  <>
    <div class="together">
      <a>Welcome Back! </a> 
     {/* <a>About Us</a> */}
      <div class="dropdown"><button class="dropbtn">Shoy By Category </button>
        <div class="dropdown-content">
          <a href="/">Skincare</a>
           <a href="/bodycare">Bodycare</a>
          <a href="/haircare">Haircare</a>
          <a href="/fragrance">Fragrance</a>
          <a href="/makeup">Makeup</a>
        </div>
      </div>
      <a href="/favorites"> Your Favorites <i class="fa-regular fa-heart"></i> </a>
      <a href="/sign-out">Log Out</a>
    </div>
  </>
);


const alwaysOptions = (
  <>
    <a class="Name" href="/"> <h2 class="title">Beauty World </h2> </a>
      <div class="together">
        <div class="dropdown"><button class="dropbtn">Shop By Category </button>
          <div class="dropdown-content">
          <a href="/">Skincare</a>
          <a href="/bodycare">Bodycare</a>
          <a href="/haircare">Haircare</a>
          <a href="/fragrance">Fragrance</a>
          <a href="/makeup">Makeup</a>
        </div>
      </div>
     {/* <a>About Us</a> */}
      <a href="/sign-in">Log In   <i class="fa-regular fa-user"></i></a>
    </div>
  </>
);

const Header = ({ user }) => (

  <div class="navbar">
        {user && (
          // <span className="navbar-text mr-2">Welcome Back to  {user.email} BeautyLand</span>
          <a class="Name" href="/"> <h2 class="title">Beauty World </h2> </a>
        )}
        {user ? authenticatedOptions : alwaysOptions}
    </div>
);
    
export default Header;
