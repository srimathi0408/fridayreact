import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Components/Home';
import ProductPage from './Components/Product';
import TypesOfHandicrafts from './Components/Types of Handicraft';
import HomeDecor from './Components/Homedecor';
import StatuesAndSculptures from './Components/Statues';
import ContactPage from './Components/Contact';
import About from './Components/About';
import AdminAddProduct from './Components/AdminAddProduct';
import LoginPage from './Components/Login';
import SignUp from './Components/Sign';
import CartPage from './Components/Cart'; // Import CartPage
import './App.css';

// Cart Context and Provider
export const CartContext = createContext(); // Export CartContext

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => { // Export CartProvider
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Header Component with Cart Navigation
function Header() {
  const { dispatch } = useContext(CartContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role'); // Assuming role is saved in localStorage
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: 'Handmade Craft Item',
      price: 25.99,
    };
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <header className="header">
      <h1 className="header-title">Handmade & Craft Marketplace</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <div className="nav-link dropdown">
          <span className="dropdown-toggle">Categories</span>
          <div className="dropdown-menu">
            <Link to="/types-of-handicrafts" className="dropdown-item">Types of Handicrafts</Link>
            <Link to="/home-decor" className="dropdown-item">Home Decor</Link>
            <Link to="/statues-and-sculptures" className="dropdown-item">Statues and Sculptures</Link>
          </div>
        </div>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/admin" className="nav-link">AdminAddProduct</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">SignUp</Link>
        <Link to="/cart" className="cart-button"></Link>
      </nav>
    </header>
  );
}

// Main App Component
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/types-of-handicrafts" element={<TypesOfHandicrafts />} />
            <Route path="/home-decor" element={<HomeDecor />} />
            <Route path="/statues-and-sculptures" element={<StatuesAndSculptures />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminAddProduct />} /> {/* Admin Route without protection */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<CartPage />} /> {/* Cart Route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
