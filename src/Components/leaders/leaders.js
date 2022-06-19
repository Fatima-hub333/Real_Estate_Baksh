import React from 'react';
import './leaders.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import leader1 from '../Images/leader--1.png';
import leader2 from '../Images/leader--2.png';
import leader3 from '../Images/leader--3.png';
import leader4 from '../Images/leader--4.png';

export default function Leaders() {
  return (
    <div className="leadermain">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={3}>
            <div className="leaderss">
              <img src={leader1} alt="leader1" />
            </div>
            <div>
              <p className="ldpos">DIRECTOR OPERATIONS</p>
              <p className="ldname">ch. mehmood akhter</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leaderss">
              <img src={leader2} alt="leader2" />
            </div>
            <div>
              <p className="ldpos">DIRECTOR COMPANY AFFAIRS</p>
              <p className="ldname">Zia Ullah Abbasi</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leaderss">
              <img src={leader3} alt="leader3" />
            </div>
            <div>
              <p className="ldpos">DIRECTOR PUBLIC RELATIONS</p>
              <p className="ldname">Sheikh Hassan Shakoor</p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leaderss">
              <img src={leader4} alt="leader4" />
            </div>
            <div>
              <p className="ldpos">MARKETING CONSULTANT</p>
              <p className="ldname">Dr. Muhammad Umar</p>
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
