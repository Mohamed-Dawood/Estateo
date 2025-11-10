import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/services', text: 'Services' },
    { to: '/about-us', text: 'About Us' },
    { to: '/contact', text: 'Contact Us' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" onClick={() => isOpen && toggleMenu()}>
            <h3>Estateo</h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links desktop">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="nav-link">
                {link.text}
              </Link>
            ))}
          </div>

          <div className="nav-auth desktop">
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
            </Link>
            {user ? (
              <>
                <span className="user-name">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="auth-button">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="auth-button">
                  Sign In
                </Link>
                <Link to="/signup" className="auth-button">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="/cart"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart /> Cart
            </Link>
            {user ? (
              <>
                <span className="user-name">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="auth-button">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
