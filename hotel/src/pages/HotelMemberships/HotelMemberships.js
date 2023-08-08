import React, { useState } from 'react';
import './HotelMemberships.css';

const membershipsData = [
  {
    title: 'Standard Membership',
    description: 'Access to standard amenities\n10% discount on food and beverages\nFree Wi-Fi',
    price: '$100/month',
    details: 'Standard Membership includes access to our standard amenities, such as the swimming pool, gym, and business center. Enjoy a 10% discount on all food and beverage purchases made at our hotel\'s restaurants and bars. Stay connected with complimentary Wi-Fi throughout your stay. The Standard Membership offers you the perfect blend of comfort and value.'
  },
  {
    title: 'Gold Membership',
    description: 'Access to premium amenities\n20% discount on food and beverages\nFree Wi-Fi\nComplimentary spa treatment once a month',
    price: '$200/month',
    details: 'Gold Membership provides you access to all the amenities included in the Standard Membership, along with exclusive access to our premium amenities. Enjoy a 20% discount on all food and beverage purchases, and receive a complimentary spa treatment once a month. Experience the pinnacle of luxury and relaxation with our Gold Membership.'
  },
  {
    title: 'Platinum Membership',
    description: 'Access to all amenities\n30% discount on food and beverages\nFree Wi-Fi\nComplimentary spa treatment twice a month\nFree access to the fitness center',
    price: '$300/month',
    details: 'With the Platinum Membership, you get access to all amenities available in the Standard and Gold Memberships. Enjoy a generous 30% discount on food and beverage purchases. Receive complimentary spa treatments twice a month and complimentary access to our state-of-the-art fitness center. The Platinum Membership is designed to cater to your every need, ensuring an unforgettable stay experience.'
  }
];

const HotelMemberships = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMoreInfoClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <header className="memberships-header">
        <h1 className="memberships-title">Hotel Memberships</h1>
      </header>

      <main className="memberships-main">
        <section className="memberships-list">
          {membershipsData.map((membership, index) => (
            <div className={`membership-card ${expandedIndex === index ? 'expanded' : ''}`} key={index}>
              <h2 className="membership-title">{membership.title}</h2>
              <p className="membership-description">{membership.description}</p>
              <p>Price: {membership.price}</p>
              <button className="ctn ctn-s ctn-a" onClick={() => handleMoreInfoClick(index)}>
                {expandedIndex === index ? 'Less Info' : 'More Info'}
              </button>
              {expandedIndex === index && (
                <div className="expanded-content">
                  <p>{membership.details}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HotelMemberships;
