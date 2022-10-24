import React from 'react'

function Weather({info}) {
    return (
        <div className='infoWeath'>
            <p>Location: {info.country}, {info.city}</p>
            <p>Temp: {info.temp}</p>
            <p>Pressure: {info.pressure}</p>
            <p>Sunset: {info.sunset}</p>
        </div>
    )
}

export default Weather