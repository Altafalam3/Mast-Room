import React from 'react';
import './MyTripsPage.css';

const dummyTrips = [
  {
    id: 1,
    destination: 'New York City',
    date: '2023-09-15',
    duration: '5 days',
    image:
      'https://images.pexels.com/photos/5297989/pexels-photo-5297989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 2,
    destination: 'Paris, France',
    date: '2023-10-20',
    duration: '7 days',
    image:
      'https://images.pexels.com/photos/5322742/pexels-photo-5322742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    destination: 'Tokyo, Japan',
    date: '2023-11-10',
    duration: '6 days',
    image:
      'https://images.pexels.com/photos/4518722/pexels-photo-4518722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  // Add more dummy trips as needed
];

const MyTripsPage = () => {
  return (
    <div className="my-trips-page">
      <h2 className="my-trips-page__title">My Trips</h2>
      <div className="my-trips-page__trip-list">
        {dummyTrips.map((trip) => (
          <div className="my-trips-page__trip-card" key={trip.id}>
            <img className="my-trips-page__trip-image" src={trip.image} alt={trip.destination} />
            <div className="my-trips-page__trip-details">
              <h3 className="my-trips-page__trip-destination">{trip.destination}</h3>
              <p className="my-trips-page__trip-date">Date: {trip.date}</p>
              <p className="my-trips-page__trip-duration">Duration: {trip.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTripsPage;
