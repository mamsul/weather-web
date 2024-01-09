interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherDetails {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  '1h': number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface IWeatherData {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherDetails;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface IForecastData {
  dt: string;
  main: MainWeatherDetails;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: string;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

interface IForecastGroup {
  date: string;
  temp: number;
  desc: string;
  main: string;
}

interface IForecastRes {
  list: IForecastData[];
}

// Weather Condition for Ilustration
type WeatherType =
  | 'Rain'
  | 'Clear'
  | 'Haze'
  | 'Thunderstorm'
  | 'Clouds'
  | 'nigth-storm'
  | 'partly-cloudy'
  | 'partly-day-storm'
  | 'Snow';
