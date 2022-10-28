import React from 'react'
import { links } from '../utils/constants'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Home from './Home'
import StarWars from './StarWars'

const Main = ({page}) => {
  switch (page) {
    case links[1]:
      return <AboutMe />
    case links[2]:
      return <StarWars />
    case links[3]:
      return <Contact />
    default:
      return <Home />
  }
}

export default Main