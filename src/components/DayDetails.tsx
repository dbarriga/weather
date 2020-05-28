import React from 'react';
import { IDay, IHour, IDayWeather, IHourWeather } from '../types';
import WeatherLogo from './WeatherLogo';
import WeatherDate from './WeatherDate';

interface props {
  day: IDayWeather,
  hours: Array<IHourWeather>
}

const DayDetails = ({ day, hours }: props) => {

  const formatTable = (item: IHourWeather, index: number) => {
    const itemDate: Date = new Date(item.dt * 1000);
    return (
      <tr key={index}>
        <td>{itemDate.getHours()}:00</td>
        <td>{item.temp.toFixed(0)}º</td>
      </tr>
    )
  }

  return (
    <div className="detail-container">
      <div className="details-logo">
        <WeatherLogo logoUrl={day.weather[0].main} />
      </div>
      <div>
        <div>
          City: Banff, Canada
        </div>
        <div>
          Day: <WeatherDate unix={day.dt} />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Hour</th>
                <th>Temp</th>
              </tr>
            </thead>
            <tbody>
              {hours.length > 0 ? hours.map(formatTable) : <tr><td>Not available hourly temps</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

    </div>

  );
}

export default DayDetails;