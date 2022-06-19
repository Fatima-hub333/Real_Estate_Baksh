import React from 'react';
import './contact.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Contact() {
  return (
    <div className="maincontact">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <div className="div1">
              <p className="text1">NEED A REAL ESTATE  </p>
              <p className="text2">SOLUTION?</p>
              <p className="text3">CONTACT US NOW</p>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="div2">
              <p className="text4">Call us:</p>
              <p className="text5">UAN (051) 111 789 111</p>
              <p className="text6">+92 331 1111 789</p>

            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
