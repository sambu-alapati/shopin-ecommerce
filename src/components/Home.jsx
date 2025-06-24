import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Main from './Main';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(loggedInUser);
  }, []);

  return (
    <div>
      <div className="container my-5">
        <h2>
          Welcome to Shopin{user ? `, ${user.name}!` : '!'}</h2>
      </div>
      
      <div className="container">
        <Carousel />
        <Main />
      </div>
    </div>
  );
}
