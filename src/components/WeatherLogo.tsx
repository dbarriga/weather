import React from 'react';

interface props {
  logoUrl: String
}
const WeatherLogo = ({logoUrl}: props) => <img src={`../../days/${logoUrl}.svg`} />

export default WeatherLogo;