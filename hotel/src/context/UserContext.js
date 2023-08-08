import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const cookies = new Cookies();

   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [userr, setUserr] = useState({});

   const checkUserLoggedIn = async () => {
      try {
         // This includes cookies in the request
         const response = await axios.get('http://localhost:8800/api/auth/checkLoggedIn', {
            withCredentials: true,
         });
         console.log(response.data);
         if (response.data.loggedIn) {
            setIsLoggedIn(true);
            setUserr(response.data.user);
         }
      } catch (error) {
         console.error('Error checking user login status:', error);
      }
   };


   const handleLogout = () => {
      try {
         cookies.remove('access_token', { path: '/' });
         setIsLoggedIn(false);
         setUserr({});
         console.log(userr,"user delted");

      } catch (error) {
         console.error('Error during logout:', error);
      }
   };


   useEffect(() => {
      checkUserLoggedIn();
   }, []);

   return (
      <UserContext.Provider value={{ isLoggedIn, userr, handleLogout }}>
         {children}
      </UserContext.Provider>
   );
};
