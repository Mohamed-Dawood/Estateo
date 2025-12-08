import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import { Menu, X, Heart } from 'lucide-react';
import { navLinks as allNavLinks } from '../../constants/data';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const wishlistContext = useWishlist();
  const wishlist = wishlistContext?.wishlist || [];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Estateo
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          {allNavLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.text}
            </Link>
          ))}
        </div>

        <div className="nav-auth desktop">
          <Link to="/wishlist" className="wishlist-icon">
            <Heart size={20} />
            <span className="badge">{wishlist.length}</span>
          </Link>

          {user ? (
            <>
              <span className="user-name">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="auth-button signout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="auth-button signin">
                Sign In
              </Link>
              <Link to="/signup" className="auth-button signout">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          {allNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.text}
            </Link>
          ))}

          <Link to="/wishlist" className="wishlist-icon" onClick={closeMenu}>
            <Heart size={18} /> Wishlist
          </Link>

          {user ? (
            <>
              <span className="user-name">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="auth-button signout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="auth-button signin"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="auth-button signout"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
