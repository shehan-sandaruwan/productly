import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <a href="/" title="Home">
        Product<span>Ly</span>
      </a>
      <div className="shopping-cart-wrapper">
        <FaCartPlus className="shopping-cart" />
        <span>{props.itemCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
