/* eslint-disable linebreak-style */
import React from 'react';
import Navbar from './Navbar';
import './Services.css';

const Serives = () => (
  <>
    <Navbar />
    <div id="service">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h2 className="service-heading">OUR</h2>
            <h2 className="services-heading2">SERVICES</h2>
          </div>
          <div className="col-md-6 col-12">
            <img src="rec53.png" className="serviceimg" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3 className="servehead">REAL ESTATE CONSULTANTS</h3>
            <div className="line2" />
            <p className="servepara">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias et dolor explicabo? Aut recusandae quisquam
              perspiciatis, dolor aperiam laboriosam magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Serives;
