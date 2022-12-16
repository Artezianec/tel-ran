import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeAvatarAction, changeNameAction} from '../actions/userActions';

const Avatar = ({ size }) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatarAction(url));
            }}
            onContextMenu={
                e => {
                    e.preventDefault();
                    const name = prompt('Enter new name');
                    dispatch(changeNameAction(name));
                }
            }
        />

    )
}

export default Avatar