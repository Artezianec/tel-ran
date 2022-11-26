import React from 'react';
import { navItems } from '../utils/constants';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import StarWars from './StarWars';

const Main = ({currentPage}) => {

  switch (currentPage.route) {
    case navItems[1].route:
      return <AboutMe />
    case navItems[2].route:
      return <StarWars />
    case navItems[3].route:
      return <Contact />
    default:
      return <Home />
  }

}

export default Main