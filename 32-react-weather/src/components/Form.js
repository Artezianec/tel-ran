import React, { useEffect, useState } from 'react'
import { addr, key } from '../utils/Key';

function Form() {
    const [city, setCity] = useState('');
    useEffect(() => {
        document.title = `Weather for city ${city}`;
    })

    const handleSubmit = () => {
        fetch(`${addr}q=${city}&appid=${key}`)
            .then(responce => responce.json())
            .then(data => console.log(data))
    }
    return (
        <div onSubmit={handleSubmit}>
            <input type='text' name='city' placeholder='City' onChange={(e) => { setCity(e.target.value) }
            } />

            <button onClick={handleSubmit}>Get Weather state</button>
        </div>
    )
}

export default Form