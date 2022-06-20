/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    {/* nav start */}
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-4 mt-5">
            <img src="logo.png" className="logo" alt="" />
          </div>
          <div className="col-md-8 col-6 mt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/Services">
                      Events
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/Blogs">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-2 col-4 mt-5">
            <div className="rectangle">
              <p className="con">Contact</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* header section start */}
    {/* <div className="container">
      <div className="col-12">
        <h1 className="BKS">BAKSH</h1>
      </div>
    </div> */}
    {/* nav end */}

    {/* header end */}

    {/* section start */}
    {/* <div className="container">
      <div className="col-md-12 col-12 mt-5">
        <p className="value">WE VALUE YOUR DREAMS</p>
        <p className="para2">
          Our core mission is to provide the highest caliber real estate
          {' '}
          <br />
          {' '}
          developement, management, and investment services
        </p>
      </div>
    </div> */}
    {/* section end */}

    {/* contact us start */}
    {/* <div className="container">
      <div className="row">
        <div className="col-md-6 col-12 contact">
          <h2 className="real-estate">NEED A REAL ESTATE </h2>
          <h2 className="sol">SOLUTION?</h2>
          <p className="conp">CONTACT US NOW</p>
        </div>
        <div className="col-md-6 col-12 contact2">
          <h2 className="call">Call us:</h2>
          <p className="uan">
            UAN (051) 111 789 111
            {' '}
            <br />
            +92 331 1111 789
          </p>
        </div>
      </div>
    </div> */}
    {/* contact us end */}
  </>
);

export default Navbar;
