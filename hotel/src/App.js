import './App.css';
import Login from './components/login/Login';
import FrontPage from './pages/FrontPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import ContactUs from './components/contact/ContactUs';
import SearchHotels from './pages/Blogs';
import SpecialOffers from './pages/SpecialOffers';
import Footer from './components/footer/Footer';
import MumbaiBlog from './components/blogs/MumbaiBlog';
import PuneTravelBlog from './components/blogs/PuneTravelBlog';
import HotelDetailsPage from './pages/HotelDetailsPage';
import List from './pages/list/List';
import Blog1 from './components/blogs/Blog1';
import Blog3 from './components/blogs/Blog3';
import Blog2 from './components/blogs/Blog2';
import HotelBrands from './pages/HotelBrand/HotelBrand';
import HotelMemberships from './pages/HotelMemberships/HotelMemberships';
import MyTripsPage from './pages/MyTripsPage/MyTripsPage';
import FavouritePage from './pages/FavouritePage/FavouritePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/hotels-in/:city" element={<List />} />
            <Route path="/" element={<FrontPage />} />
            <Route path="/MyBookings" element={<MyBookings />} />
            <Route path="/SearchHotels" element={<SearchHotels />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/SpecialOffers" element={<SpecialOffers />} />
            <Route exact path="/MumbaiBlog" element={<MumbaiBlog />} />
            <Route exact path="/PuneTravelBlog" element={<PuneTravelBlog />} />
            <Route exact path="/Blog1" element={<Blog1 />} />
            <Route exact path="/Blog2" element={<Blog2 />} />
            <Route exact path="/Blog3" element={<Blog3 />} />
            <Route exact path="/HotelBrand" element={<HotelBrands />} />
            <Route exact path="/HotelMemberships" element={<HotelMemberships />} />
            <Route exact path="/ProfilePage" element={<ProfilePage />} />
            <Route exact path="/FavouritePage" element={<FavouritePage />} />
            <Route exact path="/MyTripsPage" element={<MyTripsPage />} />

            <Route exact path="/hotels-in/:city/:hotelid" element={<HotelDetailsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </UserProvider>
  );
}

export default App;
