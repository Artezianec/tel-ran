import React, {useContext} from 'react';
import {navItems} from '../utils/constants';
import NavItem from './NavItem';
import {SWContext} from "../utils/context";

const Navigation = () => {
	const {hero} = useContext(SWContext)
	return (
		<nav className="fixed-top mt-2 ms-4">
			<ul className="nav">
				{navItems.map(item => <NavItem hero={hero} key={item.route} item={item}/>)}
			</ul>
		</nav>
	)
}

export default Navigation