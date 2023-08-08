import React from 'react';
import './FavouritePage.css';

const dummyHotels = [
  {
    id: 1,
    name: 'Luxury Hotel 1',
    location: 'City Center',
    price: '$200',
    image:
    'https://images.pexels.com/photos/4624741/pexels-photo-4624741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
},
  {
    id: 2,
    name: 'Beach Resort 2',
    location: 'Beachside',
    price: '$180',
    image:
      'https://images.pexels.com/photos/5471151/pexels-photo-5471151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    name: 'Mountain Retreat 3',
    location: 'Hill Station',
    price: '$220',
    image:
      'https://images.pexels.com/photos/4624741/pexels-photo-4624741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  // Add more dummy hotels as needed
];

const FavouritePage = () => {
  return (
    <div className="favourite-page">
      <h2 className="favourite-page__title">Favourite Hotels</h2>
      <div className="favourite-page__hotel-list">
        {dummyHotels.map((hotel) => (
          <div className="favourite-page__hotel-card" key={hotel.id}>
            <img className="favourite-page__hotel-image" src={hotel.image} alt={hotel.name} />
            <div className="favourite-page__hotel-details">
              <h3 className="favourite-page__hotel-name">{hotel.name}</h3>
              <p className="favourite-page__hotel-location">{hotel.location}</p>
              <p className="favourite-page__hotel-price">{hotel.price} per night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
