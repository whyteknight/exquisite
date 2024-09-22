import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Exquisite, we are passionate about creating unforgettable dining experiences. Our menu is crafted with the finest ingredients, blending tradition and innovation to deliver exceptional flavors. With a warm, welcoming atmosphere and dedicated service, we invite you to savor every moment with us.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 1982, Exquisite began as a small, family-owned eatery with a passion for authentic flavors and exceptional hospitality. Over the years, we have grown while staying true to our roots, evolving our menu and atmosphere to reflect both tradition and modern culinary innovation. Today, we continue to serve our community with the same dedication that started it all.</p>
        <button type="button" className="custom__button">Read On</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
