/* eslint-disable react/button-has-type */
// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import DrawerComponent from "./Drawer";
// import IconButton from '@mui/material/IconButton';
// import "./Topbar.css";
// import mainicon from '../Images/mainicon.png'

// function Navbar() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <AppBar position="static">
//       <CssBaseline />
//       <Toolbar className="topp">
//         <Typography variant="h4" className="logo" >
//           <img src={mainicon}></img>

//         </Typography>
//         {isMobile ? (
//           <DrawerComponent />
//         ) : (
//           <div className="navlinks">
//             <ul>
//               <li className="link">HOME</li>
//               <li className="link">ABOUT </li>
//               <li className="link">PROJECTS</li>
//               <li className="link">EVENTS</li>
//               <li className="link">BLOGS</li>
//               <li className="link"> <button className="btncontact">CONTACT</button>  </li>
//             </ul>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Navbar;

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Topbar.css';
import mainicon from '../Images/mainicon.png';

export default function Navbar() {
  return (
    <div className="top">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={3}>
            <div className="top1">
              <img src={mainicon} alt="icon" />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="top2">
              <div className="navlinks">
                <ul>
                  <li className="link">HOME</li>
                  <li className="link">ABOUT </li>
                  <li className="link">PROJECTS</li>
                  <li className="link">EVENTS</li>
                  <li className="link">BLOGS</li>
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="top3">
              {/* button */}
              <button className="cntbtn">CONTACT</button>
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
