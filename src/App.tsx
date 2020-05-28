import React, { useState, useEffect, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './components/Day';
import { IDay, IResult, IDayWeather, IWeather, IHourWeather } from './types';
import DayDetails from './components/DayDetails';
import { days } from './data/mockData';


function App() {

  const [selectedDay, handleSelectedDay] = useState<IDayWeather | undefined>(undefined);
  const [weatherDays, handleDays] = useState<Array<IDayWeather>>([]);
  const [hourlyDays, handleHourlyDays] = useState<Array<IHourWeather>>();
  const [allHourly, handleAllHourly] = useState<Array<IHourWeather>>();

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=51.180&lon=-115.565&units=metric&appid=e46bf7032f75d50e0d34fe6c40f8cf6b')
      .then((result: any) => result.json())
      .then((data: IResult) => {
        handleAllHourly(data.hourly);
        handleDays(data.daily);
        handleSelectedDay(data.current);
      });
  }, []);

  useEffect(() => {
    if (selectedDay)
      setHourly(selectedDay);
  }, [selectedDay]);
  
  const handleClick = (index: number) => (e: MouseEvent) => {
    e.preventDefault();
    handleSelectedDay(weatherDays[index]);
  }

  const setHourly = (sDay: IDayWeather) => {
    const selectedDate = new Date(sDay.dt * 1000).getDate();
    if (allHourly) {
      const x = allHourly.filter((item: IHourWeather) => new Date(item.dt * 1000).getDate() === selectedDate);
      handleHourlyDays(x);
    }
  }

  return (
    <div>
      <div className="days-container">
        {weatherDays.map((item: IDayWeather, index: number) => <Day day={item} key={index} clickDay={handleClick(index)} />)}
      </div>
      <div className="details-container">
        {selectedDay && hourlyDays && <DayDetails day={selectedDay} hours={hourlyDays} />}
      </div>
    </div>
  );
}

export default App;
