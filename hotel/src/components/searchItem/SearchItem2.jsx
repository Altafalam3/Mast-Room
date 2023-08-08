import React from "react";
import { FiWifi, FiTv, FiLock } from "react-icons/fi";
import { BiWater, BiBath, BiCheck } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import "./searchItem2.css";
import { useLocation, useNavigate } from "react-router-dom";

const SearchItem2 = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const discountPercentage = ((parseInt(item.originalPrice.replace(/[^0-9]/g, ""), 10) - parseInt(item.price.replace(/[^0-9]/g, ""), 10)) / parseInt(item.originalPrice.replace(/[^0-9]/g, ""), 10)) * 100;
  const formattedDiscount = Math.floor(discountPercentage);

  const handleBook = (hotelid) => {
    const currentPathname = location.pathname;

    const newURL = `${currentPathname}/${hotelid}`;

    navigate(newURL);
  }

  return (
    <div className="hotel-detail-row">
      <div className="hotel-img ">
        <div className="hotel-img-wrap">
          <img
            alt={item.name}
            title={item.name}
            src={item.image}
            data-original={item.image}
          />
        </div>
      </div>
      <div className="hotel-content-wrap">
        <div className="table-div">
          <div className="table-cell detail-wrap">
            <h3 className="hotel-name">
              <a >
                {item.name}
              </a>
            </h3>
            <div className="hotel-detail">
              <address>
                <a>
                  <span className="locality-title">
                    {item.locality}, {item.city}
                  </span>
                </a>
              </address>
            </div>
            <div className="covid-data">
              <div className="covid-title">
                <img
                  alt={`100% Safe Place to Stay in ${item.city}`}
                  src="https://static.fabhotels.com/homepage/disruption/seal-app-srpV1.png"
                />
              </div>
              <a
                href="#"
                className="link-arrow covid_alert"
                data-property-id={item._id}
                data-property-name={item.name}
                style={{ color: "#379aff" }}
              >
                See how<span></span>
              </a>
            </div>
            <div className="rating">
              <div className="rating-wrapper">
                <span className="rating-value">{item.rating}</span>
                <div className="rating-review-wrapper">
                  {item.reviews.length} Reviews
                </div>
              </div>
            </div>
            <div className="list-amenity-wrapper">
              <ul className="amenity-wrap">
                {item.wifi && (
                  <li>
                    <FiWifi className="amenity-icon" size={20} />
                    <span> Free Wifi </span>
                  </li>
                )}
                {item.tv && (
                  <li>
                    <FiTv className="amenity-icon" size={20} />
                    <span> LCD TV </span>
                  </li>
                )}
                {item.security && (
                  <li>
                    <FiLock className="amenity-icon" size={20} />
                    <span> 24X7 Security </span>
                  </li>
                )}
              </ul>
              <details className="all-standard-amenity">
                <summary>+ all other amenities</summary>
                <ul>
                  {item.amenities.map((amenity, index) => (
                    <li key={index}>
                      <BiCheck size={20} />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
          <div className="table-cell hotel-benefit-wrap">
            <ul className="couple-friend-msg">
              {item.cancellation && (
                <li>
                  <BiCheck size={20} />
                  Free Cancellation
                </li>
              )}
              {item.breakfast && (
                <li>
                  <BiCheck size={20} />
                  FREE Breakfast
                </li>
              )}
              {item.payAtHotel && (
                <li>
                  <BiCheck size={20} />
                  Pay @ Hotel
                </li>
              )}
            </ul>
            <div className="hotel-price">
              <div className="wrap-price">
                <del className="room-price">{item.originalPrice}</del>
                <span className="save-rupees"> {formattedDiscount}% off </span>
              </div>
              <div className="price-sec">
                {/* <div className="price-sec-wrap"> */}
                <span className="discounted-price"><strong>{item.price}</strong> /night</span>
                {/* </div> */}
                <p className="guest-desc"> for 1 guest (Ex. GST)</p>
              </div>
              <span className="quick-book"
                onClick={() => handleBook(item._id)}
              >
                Quick Book
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem2;
