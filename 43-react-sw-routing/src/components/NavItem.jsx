import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {SWContext} from "../utils/context";

const NavItem = ({item}) => {
	const {hero} = useContext(SWContext)
	return (
		<li>
			<Link className="nav-item btn btn-danger mx-1" to={`${item.route}/${hero.name}`}>{item.title}</Link>
		</li>
	)
}

export default NavItem