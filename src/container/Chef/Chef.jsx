import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Welcome to Exquisite, where every dish tells a story.</p>
        </div>
        <p className="p__opensans"> My passion for cooking comes from a deep love for fresh ingredients and bold flavors, combined with the joy of sharing a meal with others. In our kitchen, we blend tradition with innovation to craft dishes that excite the senses and create unforgettable memories. Whether it’s a timeless favorite or a new creation, I invite you to savor each bite as we take you on a culinary journey. Thank you for being a part of our dining experience. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
