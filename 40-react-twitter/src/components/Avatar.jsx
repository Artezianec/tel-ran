import React from 'react'
import { TwitterContext } from '../utils/context'

const Avatar = ({size}) => {
    return (
        <TwitterContext.Consumer>
            {value => (
                <img
                    className={`user-avatar ${size ?? ''}`}
                    src={value.user.avatar}
                    alt={value.user.name}
                    onClick={() => {
                        const url = prompt("Enter your avatar url");
                        value.changeAvatar(url);
                    }}
                />
            )}
        </TwitterContext.Consumer>
    );
}

export default Avatar;