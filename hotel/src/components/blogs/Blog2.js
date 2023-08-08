// Blog2.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import './blog.css';

const Blog2 = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-content">
          <div className="img">
          <img src="https://images.pexels.com/photos/15938381/pexels-photo-15938381/free-photo-of-taj-hotel-mumbai-india.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="text">
            <div>
              <FaUser className='icon' /> <label>Shruti Singh</label>
            </div>
            <h3>Exploring Ancient Ruins</h3>
            <p>
              Unravel the mysteries of ancient civilizations as you delve into the world of ancient ruins.
              Visit historical sites, ancient temples, and majestic pyramids. Learn about the rich history
              and cultural heritage of these ancient wonders.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog2;
