import React, {useContext} from 'react'
import Navigation from './Navigation'
import {SWContext} from "../utils/context";

const Header = () => {
	const {hero} = useContext(SWContext)
	return (
		<header className='row'>
			<Navigation/>
			<h1 className="text-center py-4">{hero.name}</h1>
		</header>
	)
}

export default Header