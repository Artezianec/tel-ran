import React from 'react'
import { TwitterContext } from '../utils/context'
import Avatar from './Avatar'

const UserStats = () => {
  return (
  <TwitterContext.Consumer>{
    ({user,stats}) => 
    (<div className='user-stats'>
        <div>
            <Avatar/>
            {user.name}
        </div>
        <div className='stats'>
            <div>Followers: {stats.followers}</div>
            <div>Following: {stats.following}</div>
        </div>
    </div>)}
    </TwitterContext.Consumer>
  )
}

export default UserStats