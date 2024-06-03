import React from 'react';
import image from '../images/img2.jpg';
import { NavLink } from 'react-router-dom';
import Common from '../Common';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
