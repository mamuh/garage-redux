import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Garage Gaudin</h3>
      <p>Our garage is the best. Reasobable prices, always on time and, of course, we are fictional.</p>
      <br />
      <Link to="cars/new" id="add-car">
        Add Car
      </Link>
    </div>
  )
}

export default SideBar;
