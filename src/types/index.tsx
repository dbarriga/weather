export interface IDay {
  name: String,
  number: number,
  min: number,
  max: number,
  description: String,
  logo: String,
  hourly: Array<IHour>
}

export type logos = 'Clouds | Rain | Snow | Clear';

export interface IHour {
  hour: number,
  temp: number
}


export interface IResult {
  current: IDayWeather,
  daily: Array<IDayWeather>,
  hourly: Array<IHourWeather>,
  lat: number,
  lon: number,
  timezone: String,
  timezone_offset: number,
}

export interface IDayWeather {
  clouds: number,
  dew_point: number,
  dt: number,
  feels_like: ITemp,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  temp: ITemp,
  uvi: number,
  weather: Array<IWeather>,
  wind_deg: number,
  wind_speed: number,
}

export interface IHourWeather {
  clouds: number,
  dew_point: number,
  dt: number,
  feels_like: ITemp,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  temp: number,
  uvi: number,
  weather: Array<IWeather>,
  wind_deg: number,
  wind_speed: number,
}

export interface ITemp {
  day: number,
  eve: number
  max?: number
  min?: number
  morn: number
  night: number
}

export interface IWeather {
  description:String,
  icon:String,
  id:number,
  main:String,
}