import React, { useState } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Luxurious Rooms',
      description: 'Enjoy our luxurious and comfortable rooms with modern amenities.',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      moreInfo: 'Our luxurious rooms offer a perfect blend of comfort and modern amenities, providing you with an unforgettable stay experience. Each room is designed to cater to your needs and ensure a relaxing and enjoyable stay.',
    },
    {
      title: 'Gourmet Dining',
      description: 'Indulge in a wide range of delicious cuisines prepared by our expert chefs.',
      image: 'https://images.pexels.com/photos/3756448/pexels-photo-3756448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      moreInfo: 'Our gourmet dining experience is carefully curated by our expert chefs, offering you a wide range of delicious cuisines that will delight your taste buds. Enjoy exquisite dishes crafted with fresh, locally-sourced ingredients in an elegant and inviting ambiance.',
    },
    {
      title: 'Spa & Wellness',
      description: 'Relax and rejuvenate with our spa treatments and wellness facilities.',
      image: 'https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      moreInfo: 'Rejuvenate your body and soul with our state-of-the-art spa treatments and wellness facilities, designed to help you relax and revitalize. Our experienced therapists will guide you through a blissful journey of relaxation and well-being, leaving you feeling refreshed and renewed.',
    },
    // Add more services as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMoreInfoClick = (index) => {
    if (expandedIndex === index) {
      // If the card is already expanded, clicking again should close it
      setExpandedIndex(null);
    } else {
      // If a different card is clicked, expand that card
      setExpandedIndex(index);
    }
  };

  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className={`card mb-4 fade-in-up ${expandedIndex === index ? 'expanded' : ''}`}>
                <img src={service.image} alt={service.title} className="card-img-services" />
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className={`card-text ${expandedIndex === index ? 'hide' : ''}`}>
                    {service.description}
                  </p>
                  {expandedIndex === index && (
                    <div className="expanded-content">
                      <p>{service.moreInfo}</p>
                    </div>
                  )}
                  <button
                    className="ctn ctn-s ctn-a"
                    onClick={() => handleMoreInfoClick(index)}
                  >
                    {expandedIndex === index ? 'Less Info' : 'More Info'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
