import React, {useContext} from 'react';
import {friends} from '../utils/constants';
import Friend from './Friend';
import {SWContext} from "../utils/context";

const DreamTeam = () => {
	const {hero} = useContext(SWContext);
	return (
		<section className="float-end w-50 row border mx-1">
			<h2 className="col-12 text-center">Dream Team</h2>
			{
				friends.filter(friend => friend !== hero).map((friend, index) => <Friend key={index}
																						 pos={index + 1}
																						 friend={friend}/>)
			}
		</section>
	)
}

export default DreamTeam