import React from 'react';
import { IDay, IDayWeather } from '../types';
import WeatherLogo from './WeatherLogo';
import WeatherDate from './WeatherDate';

interface props {
  day: IDayWeather,
  clickDay: any
}

const Day = ({day, clickDay}: props) => {

  return (
    <div className="day-container" onClick={clickDay}>
      <div className="day-item logo">
        <WeatherLogo logoUrl={day.weather[0].main} />
      </div>
      <div className="day-item name">
        <div className="sub">{day.weather[0].description}</div>
        <WeatherDate unix={day.dt}/>
      </div>
      <div className="day-item min">
        <div>{day.temp.min?.toFixed(0)}º</div>
        <div className="sub">low</div>
      </div>
      <div className="day-item max">
        <div>{day.temp.max?.toFixed(0)}º</div>
        <div className="sub">high</div>
      </div>
    </div>
  )
}

export default Day;