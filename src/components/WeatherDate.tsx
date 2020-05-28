import React from 'react';

interface props {
  unix: number
}

const WeatherDate = ({ unix }: props) => {

  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date: any = new Date(unix * 1000);

  return (
    <div>
      <span>
        {`${DAYS[date.getDay()]} ${date.getDate()}`}
      </span>
    </div>
  )
}

export default WeatherDate;