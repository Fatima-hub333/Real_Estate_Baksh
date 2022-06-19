import React from 'react';
import './marketing1.css';
import 'antd/dist/antd.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image from '../../Images/image1.png';

const Marketing1 = () => (
  <div className="marketing1">
    <div className="gridbox">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={7.5}>
            <div className="heko">
              {/* hello world */}
              <img src={image} className="imgm" alt="grid" />
            </div>
          </Grid>

          <Grid item xs={12} md={4.5}>
            <div className="helo">
              <div className="titlem">
                Our Activities
              </div>
              <div className="titlem2">
                Digital Marketing Consortium
              </div>

              <div className="textm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="learnbtn">
              Learn More  &nbsp; &nbsp;    --
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  </div>
);

export default Marketing1;
