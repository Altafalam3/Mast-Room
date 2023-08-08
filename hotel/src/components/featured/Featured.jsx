
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Featured.css";

const data = [
  { city: "Hyderabad", properties: 23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_15BPlbzyI3dmLUm9n_sbtmHEFD-UPzkOA&usqp=CAU" },
  { city: "Mumbai", properties: 98, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzk9_B3pc-H1-UluOx9t2RbJolPP44SAylw&usqp=CAU" },
  { city: "Bangalore", properties: 34, image: "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/05/shrutisuman13-wikicommons.jpg" },
  { city: "Delhi", properties: 45, image: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { city: "Chennai", properties: 67, image: "https://images.pexels.com/photos/17568716/pexels-photo-17568716/free-photo-of-modern-skyscrapers-in-new-york-city-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const Featured = () => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const slider = useRef(null);

  const handleClick = (city) => {
    setDestination(city);
    navigate(`/hotels-in/${city}`, { state: { destination: city, dates, options } });
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings} className="featured-slider" ref={slider}>
        {data.map((item, index) => (
          <div className="featuredItem" key={index} onClick={() => handleClick(item.city)}>
            <img src={item.image} alt={`Featured ${item.city}`} className="featuredImg" />
            <div className="featureTitles">
              <h1>{item.city}</h1>
              <h2>{item.properties} Properties</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
