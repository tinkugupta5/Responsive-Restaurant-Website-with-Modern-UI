import React from 'react';

import './AboutUs.css';
import {images} from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__paddinh' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
  </div>
);

export default AboutUs;
