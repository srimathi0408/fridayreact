import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Categories() {
  return (
    <div className="header">
      <div className="nav-links">
        <div className="dropdown">
          <span className="nav-link dropdown-toggle">Categories</span>
          <div className="dropdown-menu">
            <Link to="/types-of-handicrafts" className="dropdown-item">Types of Handicrafts</Link>
            <Link to="/home-decor" className="dropdown-item">Home Decor</Link>
            <Link to="/statues-and-sculptures" className="dropdown-item">Statues and Sculptures</Link>
          </div>
        </div>
        <Link to="/products" className="nav-link">Products</Link>
      </div>
    </div>
  );
}

export default Categories;
