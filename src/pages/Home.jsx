import React from 'react';
import image from '../images/img2.jpg';
import { NavLink } from 'react-router-dom';
import Common from '../Common';

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
