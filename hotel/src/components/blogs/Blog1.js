// Blog1.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import './blog.css';

const Blog1 = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-content">
          <div className="img">
            <img src="https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?b=1&s=612x612&w=0&k=20&c=u73uZHo0lTiYefrWc40kMtj7YbNch8AaHdednoHeSmo=" alt="" />
          </div>
          <div className="text">
            <div>
              <FaUser className='icon' /> <label>Vivek Kumar</label>
            </div>
            <h3>"Mumbai - The City of Dreams and Dazzling Delights!"</h3>
            <p>
            1.<b> Gateway of India</b>: The Gateway of India is an iconic monument and a prominent landmark in Mumbai. Built in 1924, it stands as a symbol of historical significance, as it was the ceremonial entrance for British governors. Situated on the waterfront of Mumbai Harbor, it offers breathtaking views and serves as a popular spot for both locals and tourists to enjoy the sea breeze and take memorable photographs.<br/>

            2.<b> Marine Drive</b>: Marine Drive, also known as "Queen's Necklace" due to its nighttime illuminations, is a scenic promenade along the Arabian Sea coast. It stretches for 3.6 kilometers and offers a mesmerizing view of the sea and the city's skyline. Visitors can enjoy leisurely walks, indulge in street food, and relish stunning sunsets over the horizon.<br/>

            3.<b> Chhatrapati Shivaji Maharaj Terminus (CSMT)</b>: Formerly known as Victoria Terminus, this historic railway station is a UNESCO World Heritage Site. Renowned for its striking architecture, a blend of Victorian Gothic and traditional Indian styles, CSMT is a visual treat for architecture enthusiasts. It serves as a bustling transportation hub and stands as a remarkable symbol of Mumbai's rich heritage.<br/>

            4.<b>Elephanta Caves</b>: Located on Elephanta Island, a short ferry ride from Mumbai, the Elephanta Caves are a UNESCO World Heritage Site and a significant archaeological site. These ancient rock-cut caves showcase intricate sculptures, including those dedicated to Lord Shiva, dating back to the 5th to 8th centuries. Exploring these caves offers a glimpse into India's artistic and religious history.<br/>

            5. <b>Juhu Beach</b>: Juhu Beach is one of Mumbai's most famous and lively beaches, attracting locals and tourists alike. It offers a bustling atmosphere with various food stalls, street performers, and kite flyers. Visitors can enjoy leisurely walks along the shore, savor delicious street food, and watch mesmerizing sunsets over the Arabian Sea.<br/>

            These are just a few of the captivating places to visit in Mumbai, each offering a unique experience that showcases the city's vibrant culture and diverse heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;
