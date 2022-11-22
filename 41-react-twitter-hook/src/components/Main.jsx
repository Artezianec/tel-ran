import React from 'react';
import Nav from "./Nav";
import Body from "./Body";
import style from '../modules/style.modules.css'
const Main = () => {
	return (
		<div className={style.app}>
			<Nav/>
			<Body/>
		</div>
	);
};

export default Main;