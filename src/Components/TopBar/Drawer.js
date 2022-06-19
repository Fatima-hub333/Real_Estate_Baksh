/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import './Drawer.css';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'blue',
    fontSize: '20px',
  },
  icon: {
    color: 'white',
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        className="draw"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="drawernav">
          <ul>
            <li onClick={() => setOpenDrawer(false)} className="links">Home</li>
            <Divider />
            <li onClick={() => setOpenDrawer(false)} className="links">About </li>
            <Divider />
            <li onClick={() => setOpenDrawer(false)} className="links">Team</li>
            <Divider />
            <li onClick={() => setOpenDrawer(false)} className="links">Roadmap</li>
            <Divider />
          </ul>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
      {/* onClick={() => setOpenDrawer(false)} */}
    </>
  );
}
export default DrawerComponent;
