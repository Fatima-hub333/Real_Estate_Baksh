import React from 'react';
import './marketing2.css';
import 'antd/dist/antd.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import image from "../../Images/read.png"
import image from '../../Images/image2.png';

const Marketing2 = () => (
  <div className="marketing2">
    <div className="gridbox">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={7.5}>
            <div className="heko">
              {/* hello world */}
              <img src={image} className="imgm2" alt="DMC-2" />
            </div>
          </Grid>

          <Grid item xs={12} md={4.5}>
            <div className="helo">
              <div className="titlemar">
                Our Activities
              </div>
              <div className="titlemar2">
                Property Expo Dubai
              </div>

              <div className="textm2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="learnbtn2">
              Learn More  &nbsp; &nbsp;    --
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  </div>
);

export default Marketing2;
