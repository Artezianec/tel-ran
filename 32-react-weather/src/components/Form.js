import React from 'react';

const Form = ({getWeather}) => {

  const handleSubmit = e => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    getWeather(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='city' placeholder='City' />
      <button type='submit'>Get weather</button>
    </form>
  )
}

export default Form