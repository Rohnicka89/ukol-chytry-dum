import React, { useState } from 'react'
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header/header';
import Dashboard from './components/Dashboard/dashboard';

import smartHomeData from './smartHomeData';


const App = () => (
  <div className="container">
    <Header title = 'Chytrý dům'/>
    <Dashboard data={smartHomeData}/>
  </div>
);

render(<App />, document.querySelector('#app'));
