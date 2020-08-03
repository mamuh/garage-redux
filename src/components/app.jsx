import React, { Component } from 'react';
import SideBar from './sidebar';
import CarsIndex from '../containers/cars_index';


const App = () => {
  return (
    <div className="app">
      <SideBar />
      <CarsIndex />
    </div>
  )
}

export default App;
