import React from 'react';
import { Link } from 'react-router-dom';
import './TravelBlog.css';

const TravelBlog = () => {
  const blogCards = [
    {
      title: 'Explore Mumbai',
      subtitle: 'City of Dreams',
      description: 'Mumbai Chronicles: Exploring the Dynamic City of Dreams',
      date: 'January 29, 2023',
      image:
        'https://images.pexels.com/photos/9169886/pexels-photo-9169886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/MumbaiBlog',
    },
    {
      title: 'Discover Pune',
      subtitle: 'Cultural Hub',
      description: 'Pune Unveiled: Exploring the Rich Cultural Heritage of the City',
      date: 'February 15, 2023',
      image:
        'https://c0.wallpaperflare.com/preview/823/196/991/pune-temple-god-city.jpg',
      link: '/PuneTravelBlog',
    },
    {
      title: 'Experience Bangalore',
      subtitle: 'IT Capital',
      description: 'Discovering Bangalore: The Silicon Valley of India',
      date: 'March 8, 2023',
      image:
        'https://c0.wallpaperflare.com/preview/868/998/428/bengaluru-india-yeshwanathapura-new-railway-station-nightview.jpg',
      link: '/BangaloreTravelBlog',
    },
    {
      title: 'Explore Delhi',
      subtitle: 'Historic Landmarks',
      description: 'Delhi Diaries: Unraveling the History of the Capital City',
      date: 'April 20, 2023',
      image:
        'https://c4.wallpaperflare.com/wallpaper/986/633/101/humayuns-tomb-new-delhi-india-wallpaper-preview.jpg',
      link: '/DelhiTravelBlog',
    },
    {
      title: 'Discover Chennai',
      subtitle: 'Cultural Gem',
      description: 'Chennai Charms: Exploring the Cultural Delights of the City',
      date: 'May 12, 2023',
      image:
        'https://c0.wallpaperflare.com/preview/619/999/740/chennai-india-building-chennai-beach.jpg',
      link: '/ChennaiTravelBlog',
    },
    {
      title: 'Explore Hyderabad',
      subtitle: 'Pearl City',
      description: 'Hyderabad Heritage: Unraveling the Charms of the Pearl City',
      date: 'June 30, 2023',
      image:
        'https://c0.wallpaperflare.com/preview/548/603/688/motorcycles-parked-near-white-castle.jpg',
      link: '/HyderabadTravelBlog',
    },
  ];

  return (
   <div>
    <div className='header'>
    <h2 className='header-title'>Travel Blog</h2>
    </div>
     <div className="container">
      
      <div className="blog-cards">
        <div className="row firstrow">
          {blogCards.slice(0, 2).map((blogCard, index) => (
            <div className="col-md-6" key={index}>
              <Link to={blogCard.link} className="blog-card">
                <img src={blogCard.image} alt={blogCard.title} />
                <div className="card-overlay">
                  <h3>{blogCard.title}</h3>
                  <h4>{blogCard.subtitle}</h4>
                  <h5>{blogCard.description}</h5>
                  <p>{blogCard.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {blogCards.slice(2, 5).map((blogCard, index) => (
            <div className="col-md-4" key={index}>
              <Link to={blogCard.link} className="blog-card">
                <img src={blogCard.image} alt={blogCard.title} />
                <div className="card-overlay">
                  <h3>{blogCard.title}</h3>
                  <h4>{blogCard.subtitle}</h4>
                  <h5>{blogCard.description}</h5>
                  <p>{blogCard.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default TravelBlog;
