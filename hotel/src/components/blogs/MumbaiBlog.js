import React from 'react';
import './MumbaiBlog.css';

const MumbaiBlog = () => {
  return (
    <div className='mumbai-blog'>
      <div className='main-content'>
        <h1 className='blog-title'>Mumbai Chronicles: Exploring the Dynamic City of Dreams</h1>
        <h2 className='section-title'>Introduction:</h2>
        <p>
          Welcome to Mumbai, the pulsating heart of India! A city that never sleeps, Mumbai is a melting pot of diverse cultures, soaring skyscrapers, bustling markets, and a vibrant entertainment industry. In this travel blog, we will take you on an exciting journey through the various facets of this enchanting metropolis. Join us as we unravel the hidden gems, iconic landmarks, delectable cuisine, and the unique charm that makes Mumbai an unforgettable destination.
        </p>

        <h2 className='section-title'>1. Gateway of India: Where History Meets the Arabian Sea</h2>
        <div className='img-container'>
          <img src="https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80" alt="Gateway of India" />
        </div>
        <p>
          Our journey begins at the iconic Gateway of India, a magnificent arch that stands proudly overlooking the Arabian Sea. Built during the British Raj, this architectural marvel symbolizes the city's historical significance. Take a boat ride to Elephanta Caves or simply enjoy the stunning view while savoring local street food. The Gateway of India holds a special place in the hearts of Mumbaikars and is a popular spot for both locals and tourists to gather and soak in the mesmerizing atmosphere.
        </p>

    

        <h2 className='section-title'>2. Marine Drive: The Queen's Necklace</h2>
        <div className='img-container'>
          <img src="https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80" alt="Marine Drive" />
        </div>
        <p>
          A visit to Mumbai is incomplete without a leisurely stroll along Marine Drive. This picturesque promenade, also known as the Queen's Necklace, offers breathtaking views of the Arabian Sea. Watch the sunset as the city lights come alive, and experience the vibrant energy of Mumbai's buzzing nightlife. Whether you're taking a romantic walk with your loved one or enjoying a lively conversation with friends, Marine Drive is the perfect spot to unwind and soak in the city's charm.
        </p>
      </div>

      <div className='related-blogs'>
        <h2 className='section-title'>Related Travel Blogs</h2>
        <ul>
          <li><a href='#'>Exploring the Elephanta Caves: A Journey into Ancient Art</a></li>
          <li><a href='#'>Mumbai Street Food Delights: A Gastronomic Adventure</a></li>
          <li><a href='#'>Bollywood Dreams: Behind the Scenes in Mumbai's Film Industry</a></li>
          <li><a href='#'>Shopping in Mumbai: Where Tradition Meets Fashion</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MumbaiBlog;
