import React from 'react'
import style from '../modules/style.module.css'

const User = ({user}) => {
  return (
    <div className={style.user}>
        <div className={style.userProperty}>{user.username}</div>
        <div className={style.userProperty}>{user.email}</div>
        <div className={style.userProperty}>{user.phone}</div>
        <div className={style.userProperty}>{user.website}</div>
    </div>
  )
}

export default User