import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Compontents/About/About';
import Home from './Compontents/Home/Home';
import Project from './Compontents/Projects/Project';
import Navbar from './Compontents/Navbar/Navbar';
import Blog from './Compontents/Blog/Blog';
import Resume from './Compontents/Resume/Resume';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/projects'>
          <Project></Project>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/resume'>
          <Resume></Resume>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
