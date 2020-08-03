import React, { Component } from 'react';
import SideBar from './components/sidebar';
import CarsIndex from './containers/cars_index';

import './App.css';


const App = () => {
  return (
    <div className="app">
      <SideBar />
      <CarsIndex />
    </div>
  )
}

export default App;
