import React, { useState } from 'react';
import './ProfilePage.css';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

const ProfilePage = () => {
  const { isLoggedIn, userr,handleLogout } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
  };


  return (
    <div className="profile-page">
      <h2 className="profile-page__title">Profile Page</h2>
      {isLoggedIn ? (
        <div className="profile-page__welcome">
          <p>Welcome, {userr.name}!</p>
          <button className="profile-page__logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="profile-page__login-form">
          <label htmlFor="username" className="profile-page__label">
            Username:
          </label>
          <input type="text" id="username" className="profile-page__input" />
          <label htmlFor="password" className="profile-page__label">
            Password:
          </label>
          <input type="password" id="password" className="profile-page__input" />
          <button type="submit" className="profile-page__login-btn">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
