import React from 'react';

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard.js';

import Preferences from './components/Preferences/Preferences.js';

function App() {

  return (

    <>
    <Dashboard></Dashboard>
    <Preferences></Preferences></>

  );

}

export default App;