// Blog3.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import './blog.css';

const Blog3 = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-content">
          <div className="img">
          <img src="https://images.pexels.com/photos/6037250/pexels-photo-6037250.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="text">
            <div>
              <FaUser className='icon' /> <label>Emily Johnson</label>
            </div>
            <h3>Island Hopping in the Caribbean</h3>
            <p>
              Embark on a tropical adventure and explore the enchanting islands of the Caribbean.
              Bask in the sun on pristine beaches, dive into crystal-clear waters, and experience the
              vibrant culture and cuisine of the Caribbean islands.
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

export default Blog3;
