/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ourproject.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from 'antd';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import Item from './item';
// import { Carousel } from 'antd';
// import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../Images/proj-1.png';
import slide2 from '../Images/proj-2.png';
import slide3 from '../Images/proj-3.png';
import slide4 from '../Images/proj-4.png';

const { Meta } = Card;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Ourproject() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="ourprojectmain">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <div className="projectdiv1">
              <div className="txt1">
                <p>
                  OUR
                </p>
              </div>
              <div className="txt2">
                <p>
                  PROJECTS
                </p>
              </div>

              <div className="txt3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <div className="projectdiv2">
              <Carousel breakPoints={breakPoints}>
                <Item className="imgs">
                  {/* One */}
                  <img src={slide1} alt="slider-1" />
                </Item>
                <Item>
                  {/* Two */}
                  <img src={slide2} alt="slider-2" />
                </Item>
                <Item>
                  {/* Three */}
                  <img src={slide1} alt="slider-3" />
                </Item>
                <Item>
                  <img src={slide2} alt="slide" />
                </Item>
                <Item>
                  <img src={slide1} alt="slider1" />
                </Item>
                <Item>
                  <img src={slide2} alt="slider2" />
                </Item>
                <Item>
                  <img src={slide1} alt="slide1" />
                </Item>
                <Item>
                  <img src={slide2} alt="slidee1" />
                </Item>
              </Carousel>
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
