import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Avatar from './Avatar'
import {addStatsAction} from "../actions/statsActions";

const UserStats = () => {

	const {user, stats} = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<div className='user-stats'>
			<div>
				<Avatar/>
				{user.name}
			</div>
			<div className='stats'>
				<div onClick={() => {
					dispatch(addStatsAction({value: 'followers', count: 1}))
				}}
					 onContextMenu={
						 e => {
							 e.preventDefault();
							 dispatch(addStatsAction({value: 'followers', count: -1}));
						 }
					 }>Followers: {stats.followers}</div>
				<div onClick={() => {
					dispatch(addStatsAction({value: 'following', count: 1}))
				}}
					 onContextMenu={
						 e => {
							 e.preventDefault();
							 dispatch(addStatsAction({value: 'following', count: -1}));
						 }
					 }>Following: {stats.following}</div>
			</div>
		</div>

	)
}

export default UserStats