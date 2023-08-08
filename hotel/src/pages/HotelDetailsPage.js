import React, { useState, useEffect } from 'react';
import './HotelDetailsPage.css';
import BookingForm from './BookingForm';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


const HotelDetailsPage = () => {
  const { isLoggedIn, userr } = useContext(UserContext);

  const { hotelid } = useParams();
  const [hotel, setHotel] = useState();
  const [isLoading, setIsLoading] = useState(true); // New state to track loading

  const fetchHotel = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/hotels/find/${hotelid}`);
      setHotel(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading to false regardless of success or error
    }
  };

  useEffect(() => {
    // Fetch hotel at time 0
    const timer = setTimeout(() => {
      if (!hotel) {
        fetchHotel();
      }
    }, 0);

    // Clean up the timeout if the component unmounts before 4 seconds
    return () => clearTimeout(timer);
  }, [hotelid]); // Re-run effect whenever hotelid changes

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoggedIn) {
        const newReview = { hotelId: hotelid, userName: userr.name, content: reviewText, rating: rating };

        const response = await axios.post(`http://localhost:8800/api/hotels/reviews/${hotelid}/`, newReview);
        // updated hotel returns
        setHotel(response.data.hotel);
        setReviewText('');
        setRating(0);
      }
      else {
        alert('Login first for submitting a review.');
      }

    } catch (error) {
      console.log(error);
    }
  };


  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };


  const handleViewMoreReviews = () => {
    setShowAllReviews(true);
  };

  const handleCloseAllReviews = () => {
    setShowAllReviews(false);
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!hotel) {
    return <div>Hotel Not Found...</div>;
  }
  const strPrice = hotel.price;
  const priceAsFloat = parseInt(strPrice.replace(/[^0-9]/g, ""), 10);

  const totalPriceWithTax = parseInt(priceAsFloat * (1 + 0.05))

  return (

    <div>
      <div className="hotel-details">
        <div className="hotel-image">
          <img src={hotel.image} width="1250" height="750" alt="Hotel" />
        </div>

        <div className="hotel-info">
          <h2 className="hotel-name">{hotel.name}</h2>
          <p className="hotel-location">{hotel.locality}, {hotel.city}</p>
          <div className="hotel-rating">
            <span className="rating">{hotel.rating}</span>
            {/* <span className="out-of">/5</span> */}
          </div>

          <p className="hotel-description">
            {hotel.description}
          </p>
          <div className="amenities">
            <h3>Amenities</h3>
            <ul>
              {hotel.wifi && <li><i className="fas fa-wifi"></i> Free Wi-Fi</li>}
              {hotel.tv && <li><i className="fas fa-swimming-pool"></i> Swimming Pool</li>}
              {hotel.security && <li><i className="fas fa-dumbbell"></i> Gym</li>}
              <li><i className="fas fa-utensils"></i> Restaurant</li>
              <li><i className="fas fa-parking"></i> Parking</li>
              <li><i className="fas fa-coffee"></i> Coffee Shop</li>
              <li><i className="fas fa-concierge-bell"></i> Room Service</li>
            </ul>
          </div>
          <div className="booking-details">
            <h3>Booking Details</h3>
            <p>Price: {hotel.price} per night</p>
          </div>
        </div>
      </div>
      {showBookingForm && <BookingForm userr={userr} hotelId={hotelid} paymentAmount={totalPriceWithTax} payAtHotel={hotel.payAtHotel}/>}

      <div className="rating-bill">
        <div className="review-section">
          <h3>Reviews</h3>
          {hotel.reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul>
              {hotel.reviews.slice(0, showAllReviews ? undefined : 1).map((review, index) => (
                <li key={index}>
                  <div className="user-profile">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User" />
                    <span className="user-name">{review.userName}</span>
                  </div>
                  <p className="review-text">{review.content}</p>
                  <div className="rating">
                    {Array.from(Array(review.rating)).map((_, index) => (
                      <span key={index} className="star selected">★</span>
                    ))}
                    {Array.from(Array(5 - review.rating)).map((_, index) => (
                      <span key={index} className="star">★</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {hotel.reviews.length > 1 && !showAllReviews && (
            <button className="ctn ctn-small" onClick={handleViewMoreReviews}>
              View More Reviews
            </button>
          )}
          {showAllReviews && (
            <button className="ctn ctn-small" onClick={handleCloseAllReviews}>
              Close All Reviews
            </button>
          )}
          <div className="rating-form">
            <h3>Add a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <div>
                <label htmlFor="reviewText">Review:</label>
                <textarea
                  id="reviewText"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label>Rating:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'selected' : ''}`}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button type="submit" className="ctn ctn-s">Submit Review</button>
            </form>
          </div>
        </div>
        <div className="bill-section">
          <h3><i className="fas fa-file-invoice-dollar"></i> Bill Details</h3>
          <table className="bill-table">
            <tbody>
              <tr>
                <td>Discounted Price:</td>
                <td>{hotel.price} per night</td>
              </tr>
              {/* <tr>
                <td>Discount:</td>
                <td>10% off</td>
              </tr> */}
              <tr>
                <td>Inclusive of all taxes</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Total price (incl. of all taxes):</td>
                <td>₹{totalPriceWithTax} per night</td>
              </tr>
            </tbody>
          </table>
          <button className="ctn ctn-l" onClick={handleBookNowClick}>Continue to Book</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
