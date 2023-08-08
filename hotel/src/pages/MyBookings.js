import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyBookings.css';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const MyBookings = () => {
  const { isLoggedIn, userr } = useContext(UserContext);
  const [bookings, setBookings] = useState([]);

  const fetchUserBookings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/confirmb/getUserBookings/${userr._id}`
      );
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    // Check if the user is logged in before fetching bookings
    if (isLoggedIn) {
      fetchUserBookings();
    }
  }, [isLoggedIn]); // Run the effect whenever the `isLoggedIn` state changes

  return (
    <div>
      <div className='header'>
        <h2 className='header-title'>My Bookings</h2>
      </div>
      <div className='container-booking'>
        {isLoggedIn && bookings.length > 0 ? (
          <table className='booking-table'>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Hotel</th>
                <th>Check-In Date</th>
                <th>Check-Out Date</th>
                <th>Amount</th>
                <th>Room No</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking._id}</td>
                  <td>{booking.hotelId.name}</td>
                  <td>{booking.startDate.substring(0, 10)}</td>
                  <td>{booking.endDate.substring(0, 10)}</td>
                  <td>{booking.paymentAmount}</td>
                  <td>{booking.roomNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : isLoggedIn ? (
          <p className='no-bookings-message'>No bookings found.</p>
        ) : (
          <p className='no-bookings-message'>Please log in to view your bookings.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
