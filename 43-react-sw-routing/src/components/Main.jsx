import React from 'react';
import {navItems} from '../utils/constants';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import StarWars from './StarWars';
import {Route, Routes} from "react-router";
import Err from "./Err";

const Main = ({changeHero}) => {
	return (
		<Routes>
			{['/', navItems[0].route,`${navItems[0].route}/:hero`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
			{[navItems[1].route, `${navItems[1].route}/:hero`].map(path => <Route key={path} path={path} element={<AboutMe changeHero={changeHero}/>}/>)}
			<Route path={`${navItems[2].route}/*`} element={<StarWars/>}/>
			<Route path={`${navItems[3].route}/*`} element={<Contact/>}/>
			<Route path='*' element={<Err/>}/>
		</Routes>
	)
}

export default Main