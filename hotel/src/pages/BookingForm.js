import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import axios from 'axios';

import './BookingForm.css';

const BookingForm = ({ userr, paymentAmount, hotelId, payAtHotel }) => {

  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: 'selection',
    },
  ]);
  const [paymentOnline, setPaymentOnline] = useState("payOnline");


  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const dateRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(paymentOnline==='payHotel'){
      paymentAmount*= (1+0.03);
    }
    const bookingData = {
      startDate: dates[0].startDate,
      endDate: dates[0].endDate,
      paymentAmount: paymentAmount,
      userId: userr._id,
      userName: name,
      userEmail: email,
      userPhone: phone,
      hotelId: hotelId,
      paymentMethod: paymentOnline,
    };

    try {
      const response = await axios.post('http://localhost:8800/api/confirmb/create', bookingData);
      console.log('Booking success:', response.data);
      if(paymentOnline==='payHotel'){
        alert('Booking Done for Pay at Hotel');
      }
      else{
        alert('Redirecting to Payment Page ');
      }
      navigate('/MyBookings');
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  const handleClose = (e) => {
    window.location.reload();
  };

  const handleDateClickOutside = (event) => {
    if (dateRef.current && !dateRef.current.contains(event.target)) {
      setOpenDate(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDateClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleDateClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content booking-form">
        <h2>Booking Form</h2>
        <form >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="date-box">
            <label htmlFor="">From Date - To Date</label>
            <span onClick={() => setOpenDate(!openDate)} className='date-box-format' >
              {`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}
            </span>
            {openDate && (
              <div ref={dateRef} className="date">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date-range"
                  minDate={new Date()}
                />
              </div>
            )}
          </div>
          <div className="payment-method-box">
            <label>
              <input
                type="radio"
                name="paymentOnline"
                value="payOnline"
                checked={paymentOnline === 'payOnline'}
                onChange={(e) => setPaymentOnline(e.target.value)}
              />
              Pay @Online ₹{paymentAmount}
            </label>
            <label>
              <input
                type="radio"
                name="paymentOnline"
                value="payHotel"
                checked={paymentOnline === 'payHotel'}
                onChange={(e) => setPaymentOnline(e.target.value)}
              />
              Pay @Hotel ₹{paymentAmount*(1+0.03)}
            </label>

          </div>

          <button className="ctn ctn-sm" onClick={handleSubmit} type="submit">
            Proceed to Continue
          </button>
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
