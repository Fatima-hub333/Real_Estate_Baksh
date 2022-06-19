/* eslint-disable import/extensions */
import React from 'react';
import { Carousel } from 'antd';

import 'antd/dist/antd.css';
import Marketing1 from './marketing1/marketing1';
import Marketing2 from './marketing2/marketing2';

// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import image from "../../Images/image 4.png"

const contentStyle = {
  // height: '160px',
  lineHeight: '160px',
  textAlign: 'center',

};

const MarketingSlider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="mslider">
      <Carousel afterChange={onChange}>
        <div>
          <div style={contentStyle}>
            <Marketing1 />

          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Marketing2 />

          </div>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

    </div>
  );
};

export default MarketingSlider;
