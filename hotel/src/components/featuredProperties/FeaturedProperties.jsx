// FeaturedProperties.js
import React, { useState, useEffect } from 'react';
import './featuredProperties.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const FeaturedProperties = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/hotels/topHotels`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNav = (hotelid,hotelCity) => {
    navigate(`hotels-in/${hotelCity}/${hotelid}`);
  }

  return (
    <div className="fpContainer container">
      <div className="fp">
        {data.map(item => (
          <div onClick={()=>handleNav(item._id,item.city)} className="fpItem" key={item.id}>
            <div className="fpImgContainer">
              <img src={item.image} alt={item.name} className="fpImg" />
            </div>
            <div className="fpTextContainer">
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.locality},{item.city}</span>
              <span className="fpPrice">
                {item.originalPrice && item.price ? (
                  <>
                    <del>{item.originalPrice}</del> ,{' '}
                    {Math.floor(((parseInt(item.originalPrice.replace(/[^0-9]/g, ''), 10) - parseInt(item.price.replace(/[^0-9]/g, ''), 10)) / parseInt(item.originalPrice.replace(/[^0-9]/g, ''), 10)) * 100)}% off
                  </>
                ) : (
                  'Price information not available'
                )}
              </span>
              <span className="fpPrice">Price : {item.price || 'N/A'}/- per night</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
