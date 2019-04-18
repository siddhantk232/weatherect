import React, { Component } from 'react';

import ShowWeather from './components/ShowWeather';
import Loader from './components/Loader';

import './App.css';

class App extends Component {
  state = {
    geo_city: null,
    description: null,
    temp: null,
    min_temp: null,
    max_temp: null,
    humidity: null,
    pressure: null,
    wind_speed: null,
    city: null,
    icon_id: null,
    country: null,
    unsupp_msg: null,
    isLoading: true
  };

  componentDidMount = async () => {
    await this.getGeolocation();
    if (this.state.geo_city) {
      await this.fetchWeather(this.state.geo_city);
    }

    this.state.isLoading = false;
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return <ShowWeather weather={this.state} />;
    }
  }

  fetchWeather = async city => {
    const response = await fetch(`http://localhost:4500/get?city=${city}`);
    const data = await response.json();
    this.setState({
      ...this.state,
      description: data.weather[0].description,
      temp: data.main.temp,
      min_temp: data.main.temp_min,
      max_temp: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
      icon_id: data.weather[0].icon,
      isLoading: false
    });
  };

  getGeolocation = async () => {
    const response = await fetch('http://geoip-db.com/json/');
    const data = await response.json();

    console.log(data.city);
    this.setState({
      ...this.state,
      geo_city: data.city,
      isLoading: false
    });
  };
}

export default App;
