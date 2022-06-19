/* eslint-disable no-unused-vars */
import React from 'react';
import './ourleaders.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from 'antd';
// import { Carousel } from 'antd';
import Carousel from 'react-bootstrap/Carousel';

import service from '../Images/our-services.png';
import leader from '../Images/leaders.png';
import leader1 from '../Images/leader--1.png';
import leader2 from '../Images/leader--2.png';
import leader3 from '../Images/leader--3.png';
import leader4 from '../Images/leader--4.png';

export default function Oureader() {
  return (
    <div className="ourleadermain">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={5}>
            <div className="head1">
              <p>OUR </p>
            </div>
            <div className="head2">
              <p>LEADERS</p>
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <div className="leadinfo">
              <div>
                <img src={leader} alt="leader-2" />
              </div>
              <div className="leaddata">
                <p className="leadname">Mohsin Abbas Baksh</p>
                <p className="leadposition">CEO/Founder</p>
                <p className="leadtxt">
                  Lorem ipsum dolor sit amet,
                  <br />
                  {' '}
                  consectetur adipiscing elit, sed
                  <br />
                  do eiusmod tempor incididunt
                  <br />
                  {' '}
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
