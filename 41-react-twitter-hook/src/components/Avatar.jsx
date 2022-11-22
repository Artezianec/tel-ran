import {useContext} from 'react'
import { TwitterContext } from '../utils/context'

const Avatar = ({ size }) => {
    const {changeAvatar, user} = useContext(TwitterContext);
    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
        />
    )
}

export default Avatar