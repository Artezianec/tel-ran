import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import StarWars from './StarWars';


export const Main = () => {
  return (
    <div className="app">
            <h1>Welcome to React Router!</h1>

      <Router>
        <Routes>
          <Route path="/" component={<Home/>} />
          <Route path="/AboutMe" component={<AboutMe/>} />
          <Route path="/StarWars" component={<StarWars/>} />
          <Route path="/Contact" component={<Contact/>} />
        </Routes>
      </Router>
    </div>
  )
}
