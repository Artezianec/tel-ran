import React from 'react'
import Avatar from './Avatar'
import {useSelector} from "react-redux";

const UserStats = () => {

  const {user, stats} = useSelector(state => state);

  return (
    <div className='user-stats'>
      <div>
        <Avatar />
        {user.name}
      </div>
      <div className='stats'>
        <div>Followers: {stats.followers}</div>
        <div>Following: {stats.following}</div>
      </div>
    </div>

  )
}

export default UserStats