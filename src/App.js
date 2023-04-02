// import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
 
  render() {
  
    return (
      <>
  
      <div>
        <Router>
        <Navbar/>
        {/* <News country="in" category="science" /> */}
        <Routes>
          <Route exact path="/" element={<News key="general" country="in" category="general" />}/>
          <Route exact path="/business" element={<News key="business" country="in" category="business" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />}/>
          <Route exact path="/science" element={<News key="science" country="in" category="science" />}/>
          <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />}/>
          
        
        </Routes>


        </Router>
        <br/>
        
        <br/>
      </div>
      </>
    )
  }
}
