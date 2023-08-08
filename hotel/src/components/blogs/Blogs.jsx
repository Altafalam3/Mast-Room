import React from 'react';
import { FaUser, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './blogs.css';


const Blogs = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">

        <div className="grid mtop">
          <article className="box">
            <div className="img">
              <img src="https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?b=1&s=612x612&w=0&k=20&c=u73uZHo0lTiYefrWc40kMtj7YbNch8AaHdednoHeSmo=" alt="" />
              <span>TRENDY</span>
            </div>
            <div className="text">
              <div>
                <FaUser className="icon" /> <label>MASTRoom</label>
              </div>
              <h3>Places to visit in Mumbai</h3>
              <p>
                Mumbai, India's vibrant metropolis, beckons with iconic landmarks like
                the Gateway of India and bustling markets of Colaba.
              </p>
              <Link to="/blog1">
                Read More <FaLongArrowAltRight className="right-arr" />
              </Link>
            </div>
          </article>
          <article className="box">
            <div className="img">
              <img src="https://images.pexels.com/photos/15938381/pexels-photo-15938381/free-photo-of-taj-hotel-mumbai-india.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>TRENDY</span>
            </div>
            <div className="text">
              <div>
                <FaUser className="icon" /> <label>MASTRoom</label>
              </div>
              <h3>Things to do in Mumbai</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <Link to="/blog2">
                Read More <FaLongArrowAltRight className="right-arr" />
              </Link>
            </div>
          </article>
          <article className="box">
            <div className="img">
              <img src="https://images.pexels.com/photos/6037250/pexels-photo-6037250.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>TRENDY</span>
            </div>
            <div className="text">
              <div>
                <FaUser className="icon" /> <label>MASTRoom</label>
              </div>
              <h3>Places to visit in Mumbai</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <Link to="/blog3">
                Read More <FaLongArrowAltRight className="right-arr" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
