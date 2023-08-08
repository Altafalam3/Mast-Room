import React from 'react';
import './SpecialOffers.css';
import ReferralPage from '../components/referralPage/ReferralPage';
import { useNavigate } from "react-router-dom";

import discount1Image1 from '../images/discount1-image1.jpg';
import discount1Image2 from '../images/discount1-image2.jpg';
import discount1Image3 from '../images/discount1-image3.jpg';
import discount1Image4 from '../images/discount2-image1.jpg';
import discount1Image5 from '../images/discount2-image2.jpg';
import discount1Image6 from '../images/discount2-image3.jpg';
import discount1Image7 from '../images/discount3-image1.jpg';
import discount1Image8 from '../images/discount3-image2.jpg';
import discount1Image9 from '../images/discount3-image3.jpg';
import discount1Image10 from '../images/discount4-image1.jpg';
import discount1Image11 from '../images/discount4-image2.jpg';
import discount1Image12 from '../images/discount4-image3.jpg';
import HotelMemberships from './HotelMemberships/HotelMemberships';

const SpecialOffers = () => {
  const navigate = useNavigate();
  const discounts = [
    {
      title: 'Special Discount 1',
      description: 'Get 20% off on your next booking with code DISCOUNT20.',
      imageUrls: [discount1Image1, discount1Image2, discount1Image3],
    },
    {
      title: 'Special Discount 2',
      description: 'Get 30% off on your next booking with code DISCOUNT30.',
      imageUrls: [discount1Image4, discount1Image5, discount1Image6],
    },
    {
      title: 'Special Discount 3',
      description: 'Get 40% off on your next booking with code DISCOUNT40.',
      imageUrls: [discount1Image7, discount1Image8, discount1Image9],
    },
    {
      title: 'Special Discount 4',
      description: 'Get 50% off on your next booking with code DISCOUNT50.',
      imageUrls: [discount1Image10, discount1Image11, discount1Image12],
    },
    {
      title: 'Special Discount 5',
      description: 'Get 60% off on your next booking with code DISCOUNT60.',
      imageUrls: [discount1Image1, discount1Image2, discount1Image3],
    },
    {
      title: 'Special Discount 6',
      description: 'Get 70% off on your next booking with code DISCOUNT70.',
      imageUrls: [discount1Image1, discount1Image2, discount1Image3],
    },
  ];

  const handleSpecialOffer = () => {
    navigate(`/hotels-in/Mumbai`);
  };


  function generateDiscountImage(imageUrls) {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }

  return (
    <div>
       <div className='header'>
        <h2 className='header-title'>Special Offers</h2>
      </div>
      <div className="container">
      <div>
        <div className="row">
          {discounts.map((discount, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card">
                <img
                  src={generateDiscountImage(discount.imageUrls)}
                  className="card-img-top"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{discount.title}</h5>
                  <p className="card-text">{discount.description}</p>
                  <button className="ctn ctn-s ctn-a" onClick={handleSpecialOffer}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HotelMemberships />
      <ReferralPage />
    </div>
    </div>
  );
};

export default SpecialOffers;
