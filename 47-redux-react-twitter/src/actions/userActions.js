export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}

export const changeAvatar = (url) => {
    return {
        type: CHANGE_AVATAR,
        payload: url
    }
}