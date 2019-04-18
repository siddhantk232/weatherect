import React from 'react';
import './ShowWeather.style.css';

const ShowWeather = ({ weather }) => {
  return (
    <div className='container'>
      <div className='showcase'>
        <div className='data'>
          <i className='fas fa-temperature-high' />
          <span className='data_temp'>{weather.temp} C</span>
          <i className='fas fa-arrow-alt-circle-down data_temp' />
          <span className='data_temp'>{weather.min_temp} C</span>
          <i className='fas fa-arrow-alt-circle-up data_temp' />
          <span className='data_temp'>{weather.min_temp} C</span>
          <i className='fas fa-wind data_temp' />
          <span className='data_temp'>{weather.wind_speed} m/s</span>
        </div>
        <div className='icon'>
          <img
            src={`http://openweathermap.org/img/w/${weather.icon_id}.png`}
            alt='weather_condition'
            className='weather_condition'
          />
          <p>{weather.description}</p>
        </div>
      </div>

      <div className='details'>
        <p>Atomic Pressure: {weather.pressure} hPa</p>
        <hr />
        <p>Humidity: {weather.humidity} %</p>
        <hr />
        <p>City: {weather.city}</p>
        <hr />
        <p>Country: {weather.country}</p>
        <hr />
      </div>
    </div>
  );
};

export default ShowWeather;
