/* eslint-disable no-unused-vars */
import React from 'react';
import './about.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image from '../Images/image 4.png';

export default function About() {
  return (
    <div className="about">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={8}>
            <div>
              <p className="title">
                About
              </p>
              <p className="title2">
                Baksh
              </p>
            </div>
            <div className="linkbtn">
              discover more  &nbsp; &nbsp;    --
            </div>

            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
          </Grid>

          {/* <Grid item xs={12} md={4}>
                <div >
                <img src={image} className="img" />
                </div>
            </Grid> */}

        </Grid>
      </Box>

    </div>
  );
}
