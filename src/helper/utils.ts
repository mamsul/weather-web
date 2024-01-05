import Cloudy from '../assets/weather-icons/cloudy.png';
import HappyDay from '../assets/weather-icons/happyday.png';
import NightStorm from '../assets/weather-icons/night_storm.png';
import PartlyCloudy from '../assets/weather-icons/partly_cloudy.png';
import PartlyDayStorm from '../assets/weather-icons/partly_day_storm.png';
import Rainy from '../assets/weather-icons/rainy.png';
import Snowy from '../assets/weather-icons/snowy.png';
import ThunderStorm from '../assets/weather-icons/thunderstorm.png';

const convertDate = (timestamp: number) => {
  if (timestamp) {
    return new Date(timestamp).toDateString();
  }
  return '';
};

const weatherImg = ({ type }: { type: WeatherType }) => {
  switch (type) {
    case 'rainy':
      return Rainy;
    case 'happyday':
      return HappyDay;
    case 'thumderstorm':
      return ThunderStorm;
    case 'cloudy':
      return Cloudy;
    case 'nigth-storm':
      return NightStorm;
    case 'partly-cloudy':
      return PartlyCloudy;
    case 'partly-day-storm':
      return PartlyDayStorm;
    case 'snowy':
      return Snowy;
    default:
      return HappyDay;
  }
};

export { convertDate, weatherImg };
