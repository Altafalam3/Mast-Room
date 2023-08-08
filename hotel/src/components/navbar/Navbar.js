import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './MASTROOM.jpg';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };


  return (
    <nav className={`navbar-main ${isOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src={logo} alt="Logo" /><br /> */}
          MAST<span>Room</span>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/SpecialOffers" onClick={() => setIsOpen(false)}>
            Special Offers
          </NavLink>
          <NavLink to="/MyBookings" onClick={() => setIsOpen(false)}>
            My Bookings
          </NavLink>
          <NavLink to="/SearchHotels" onClick={() => setIsOpen(false)}>
            Blogs
          </NavLink>
          <NavLink to="/ContactUs" onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>
        </div>
        <div className="navbar-profile" onClick={toggleProfileDropdown}>
          <i className="fas fa-user"></i>
          <div className={`navbar-profile-dropdown ${isProfileOpen ? 'active' : ''}`}>
            <ul className="profile-menu">
              <li>
                <Link to="/ProfilePage" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/MyTripsPage" onClick={() => setIsOpen(false)}>
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/FavouritePage" onClick={() => setIsOpen(false)}>
                  Favourite
                </Link>
              </li>
              <li>
                {
                  isLoggedIn ? <>
                    <button className="ctn ctn-s" onClick={handleLogout}>
                      Logout
                    </button>
                  </> :
                    <button className="ctn ctn-s" onClick={handleLogout}>
                      <Link className="login-anchor" to="/login"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                      >Login</Link>
                    </button>
                }

              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={`mobile-navbar ${isOpen ? 'active' : ''}`}>
        <div className="mobile-navbar-content">
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-home"></i>
            Home
          </Link>
          <Link to="/FavouritePage" className="navbar-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-heart"></i>
            Favourite
          </Link>
          <Link to="/MyTripsPage" className="navbar-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-suitcase"></i>
            Trip
          </Link>
          <Link to="/ProfilePage" className="navbar-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-user"></i>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`navbar-link ${isActive ? 'active' : ''}`} onClick={onClick}>
      {children}
    </Link>
  );
};
