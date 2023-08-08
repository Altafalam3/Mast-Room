import React from 'react';
import './MumbaiBlog.css';

const PuneTravelBlog = () => {
  return (
    <div className="mumbai-blog">
      <div className="main-content">
        <h1 className="blog-title">Exploring Pune: A Journey through History and Culture</h1>
        <h2 className="section-title">Introduction:</h2>
        <p>
          Welcome to Pune, the cultural capital of Maharashtra! Known for its rich history, vibrant festivals, and educational institutions, Pune offers a unique blend of tradition and modernity. In this travel blog, we will take you on a captivating journey through the diverse attractions and hidden gems of this enchanting city. Join us as we explore the magnificent historical landmarks, indulge in mouthwatering cuisine, and immerse ourselves in the local culture that makes Pune a must-visit destination.
        </p>

        <h2 className="section-title">1. Shaniwar Wada: A Glimpse into Maratha History</h2>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1600162013474-9855076d951f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80" alt="Shaniwar Wada" />
        </div>
        <p>
          Our journey begins at Shaniwar Wada, the iconic fortification that stands as a testament to Pune's glorious past. Built by the Peshwas of the Maratha Empire, this magnificent structure boasts intricate architecture, lush gardens, and a captivating history. Explore the fort's ancient walls, stroll through the tranquil courtyard, and marvel at the remnants of its grandeur. Don't miss the enchanting light and sound show that brings the fort's history to life in a mesmerizing way.
        </p>

        <h2 className="section-title">2. Osho Ashram: A Spiritual Retreat</h2>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1600162013474-9855076d951f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80" alt="Osho Ashram" />
        </div>
        <p>
          A visit to Pune is incomplete without experiencing the serenity of the Osho Ashram. Nestled in lush surroundings, this spiritual retreat offers a peaceful sanctuary away from the hustle and bustle of the city. Immerse yourself in meditation, participate in rejuvenating workshops, and explore the beautiful gardens. Whether you're seeking tranquility or a deeper spiritual connection, the Osho Ashram provides a transformative experience for all.
        </p>
      </div>

      <div className="related-blogs">
        <h2 className="section-title">Related Travel Blogs</h2>
        <ul>
          <li><a href="#">Aga Khan Palace: Witnessing History and Elegance</a></li>
          <li><a href="#">Raja Dinkar Kelkar Museum: A Treasure Trove of Indian Artifacts</a></li>
          <li><a href="#">Pune Street Food Delights: A Gastronomic Adventure</a></li>
          <li><a href="#">Shopping in Pune: Exploring Local Markets and Bazaars</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PuneTravelBlog;
