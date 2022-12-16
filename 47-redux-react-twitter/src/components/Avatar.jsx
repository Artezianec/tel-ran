import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeAvatar, changeName} from '../actions/userActions'

const Avatar = ({ size }) => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const url = prompt('Enter new name');
                dispatch(changeName(url));
            }
            }
        />

    )
}

export default Avatar