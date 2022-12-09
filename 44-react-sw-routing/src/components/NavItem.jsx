import React, {useContext} from 'react';
import {SWContext} from "../utils/context";
import { useNavigate } from 'react-router';


const NavItem = ({item}) => {
	let navigate = useNavigate();
	const {hero} = useContext(SWContext);
	return (
		<ul>
			<li onClick={() => navigate(`${item.route}/${hero}`)} className="nav-item btn btn-danger mx-1">{item.title}</li>
		</ul>
	)
}

export default NavItem