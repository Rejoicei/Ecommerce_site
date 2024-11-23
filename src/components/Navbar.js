import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);  // Accessing cart state from Redux store
  const cartItemCount = cart.length;

  return (
    <nav className="navbar">
      {/* <Link to="/" className="logo">E-Commerce</Link> */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
