import React, { useState } from 'react'
import { game } from '../App'

const Start = ({changeName, changePage}) => {

    const [name, setName] = useState('');

    const handleClickStart = () => {
        changePage(game);
        changeName(name);
    }

    return (
        <>
            <h1>Ready For War</h1>
            <input
                onChange={e => setName(e.target.value.toUpperCase())}
                type='text'
                placeholder='Enter your name'
                value={name} />
            <button onClick={handleClickStart}>Start</button>
        </>
    )

}

export default Start