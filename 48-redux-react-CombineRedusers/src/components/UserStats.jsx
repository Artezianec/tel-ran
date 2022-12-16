import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStats } from '../actions/statsActions';
import Avatar from './Avatar'

const UserStats = () => {

  const { user, stats } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className='user-stats'>
      <div>
        <Avatar />
        {user.name}
      </div>
      <div className='stats'>
        <div
          onClick={() => dispatch(changeStats('followers', 1))}
          onContextMenu={e => {
            e.preventDefault();
            dispatch(changeStats('followers', -1));
          }}
        >Followers: {stats.followers}</div>
        <div
          onClick={() => dispatch(changeStats('following', 1))}
          onContextMenu={e => {
            e.preventDefault();
            dispatch(changeStats('following', -1));
          }}
        >Following: {stats.following}</div>
      </div>
    </div>

  )
}

export default UserStats