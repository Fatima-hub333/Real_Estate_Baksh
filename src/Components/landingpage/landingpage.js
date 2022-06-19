import React from 'react';
import './landing.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Landing() {
  return (
    <div className="mainlanding">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={12}>
            <div className="heading">
              <p>BAKSH</p>
              {/* <img src={"logo.png"} /> */}
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <div className="subhead">
              <p>-- We Value Your Dreams --</p>
            </div>

            <div className="line3">
              <p>
                Our core mission is to provide the highest caliber
                real estate development, management, and investment services.
              </p>
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
