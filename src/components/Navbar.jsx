import React, { useState } from "react";
import { FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="navigation-container">
      <div className="navigation-links">
        {/* <img src={logo} alt="logo" className="img-logo" /> */}
        <p>Home</p>
        <p>Tweet</p>
        <p>User</p>
      </div>
      <button className="navigation-sidebar-toggle">
        <FaBars />
      </button>
      <div className="navigation-tools">
        {isLoggedIn ? (
          <>
            <button className="btn btn-sm primary" onClick={() =>{}}>
              Logout
            </button>
          </>
        ) : (
          <button
            className="btn btn-sm primary"
            onClick={() =>{}}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
