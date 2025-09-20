import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar'; // default
import Landing from './components/layout/Landing'; // default
import './App.css';

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
