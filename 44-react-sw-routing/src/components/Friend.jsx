import React from 'react'
import style from '../css_modules/bottomRound.module.css'
import {characters} from "../utils/constants";
import {Link} from "react-router-dom";

const Friend = ({friend, pos}) => {
	const picture = characters[friend].img;

	let styles = 'col-4 p-1';

	if (pos === 7) {
		styles = `${styles} ${style.bottomLeft}`;
	}
	if (pos === 9) {
		styles = `${styles} ${style.bottomRight}`;
	}
	return (
		<Link className={styles} to={`/home/${friend}`}>
			<img src={picture} alt="Friend" className='w-100'/>
		</Link>)
}

export default Friend