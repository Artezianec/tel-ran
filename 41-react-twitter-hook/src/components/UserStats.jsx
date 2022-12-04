import React, {useContext} from 'react'
import {TwitterContext} from '../utils/context'
import Avatar from './Avatar'
import '../modules/style.modules.css'

const UserStats = () => {
	const {user, stats, changeName} = useContext(TwitterContext);
	return (
		<div className='user-stats'>
			<div>
				<Avatar/>
				{user.name}
				<input onChange={event => {
					changeName(event.target.value)
				}} value={user.name}/>
			</div>
			<div className='stats'>
				<div>Followers: {stats.followers}</div>
				<div>Following: {stats.following}</div>
			</div>
		</div>
	)
}

export default UserStats