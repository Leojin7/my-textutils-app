import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AlertContext } from '../context/alert/alertContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const isLoggedIn = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    showAlert('Logged out successfully', 'success');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Brand */}
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              iNotebook
            </Link>
            <span className="brand-badge">Secure Notes</span>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
              {location.pathname === '/' && <span className="nav-indicator"></span>}
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
              {location.pathname === '/about' && <span className="nav-indicator"></span>}
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="navbar-auth">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-logout">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-login">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-signup">
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="menu-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Panel */}
        {isOpen && (
          <div className="mobile-menu">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <div className="mobile-divider" />
            {isLoggedIn ? (
              <button
                onClick={() => { setIsOpen(false); handleLogout(); }}
                className="mobile-btn mobile-btn-logout"
              >
                Logout
              </button>
            ) : (
              <div className="mobile-auth-buttons">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="mobile-btn mobile-btn-login"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="mobile-btn mobile-btn-signup"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
