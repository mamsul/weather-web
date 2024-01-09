import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cloudy from '../assets/weather-icons/cloudy.png';
import HappyDay from '../assets/weather-icons/happyday.png';
import NightStorm from '../assets/weather-icons/night_storm.png';
import PartlyCloudy from '../assets/weather-icons/partly_cloudy.png';
import PartlyDayStorm from '../assets/weather-icons/partly_day_storm.png';
import Rainy from '../assets/weather-icons/rainy.png';
import Snowy from '../assets/weather-icons/snowy.png';
import ThunderStorm from '../assets/weather-icons/thunderstorm.png';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const convertDate = (date: string) => {
  const dt = new Date(date);
  const hrs = dt.getHours();

  const formattedTime = () => {
    const min = String(dt.getMinutes()).padStart(2, '0');
    const perd = hrs >= 12 ? 'PM' : 'AM';
    return `${hrs % 12 || 12}:${min} ${perd}`;
  };

  const dateDash = () => {
    return dt.toISOString().split('T')[0];
  };

  function fullDay() {
    const fullDay = dt.toLocaleString('en-US', { weekday: 'long' });
    return fullDay;
  }

  function fullMonth() {
    const fullMonth = dt.toLocaleString('en-US', { month: 'long' });
    return fullMonth;
  }

  return { formattedTime, dateDash, fullMonth, fullDay };
};

const weatherImg = ({ type }: { type: WeatherType }) => {
  switch (type) {
    case 'Rain':
      return Rainy;
    case 'Clear':
      return HappyDay;
    case 'Thunderstorm':
      return ThunderStorm;
    case 'Clouds':
    case 'Haze':
      return Cloudy;
    case 'nigth-storm':
      return NightStorm;
    case 'partly-cloudy':
      return PartlyCloudy;
    case 'partly-day-storm':
      return PartlyDayStorm;
    case 'Snow':
      return Snowy;
    default:
      return HappyDay;
  }
};

const rounding = (num: number) => {
  return Math.round(num);
};

const capitalizeEachWord = (text: string) => {
  const splitText = text.split(' ');
  const capitalizedWords = splitText.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  const result = capitalizedWords.join(' ');
  return result;
};

const getTodayForecast = (forecastList: IForecastData[]) => {
  if (forecastList && forecastList.length > 0) {
    const todayDate = new Date().toISOString().split('T')[0];

    return forecastList.filter((e) => {
      const splitDateTxt = e.dt_txt.split(' ');

      return splitDateTxt[0] === todayDate;
    });
  } else {
    return [];
  }
};

const groupingForecastByDate = (forecastList: IForecastData[]) => {
  const groupedForecast: { [dt_txt: string]: IForecastData[] } =
    forecastList.reduce(
      (acc, currentItem) => {
        const date = currentItem.dt_txt.split(' ')[0];

        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(currentItem);
        return acc;
      },
      {} as { [dt_txt: string]: IForecastData[] },
    );

  return groupedForecast;
};

const getWeekForecast = (forecastList: IForecastData[]) => {
  if (forecastList && forecastList.length > 0) {
    const forecastGroup = groupingForecastByDate(forecastList);

    const formattedData = Object.entries(forecastGroup).map(([key, value]) => {
      function avgTemp(arr: IForecastData[]) {
        const sumTemp: number = arr.reduce(
          (acc, value) => acc + value.main.temp,
          0,
        );
        return sumTemp / value.length;
      }

      function mostFrequentDescription(
        arr: IForecastData[],
        find: 'desc' | 'main',
      ) {
        const counts: { [key: string]: number } = arr.reduce(
          (acc, val) => {
            if (find === 'desc') {
              acc[val.weather[0].description] =
                (acc[val.weather[0].description] || 0) + 1;
              return acc;
            } else {
              acc[val.weather[0].main] = (acc[val.weather[0].main] || 0) + 1;
              return acc;
            }
          },
          {} as { [key: string]: number },
        );

        let mostFrequentValue = '';
        let maxCount = 0;

        for (const key in counts) {
          if (counts[key] > maxCount) {
            maxCount = counts[key];
            mostFrequentValue = key;
          }
        }

        return mostFrequentValue;
      }

      return {
        date: key,
        temp: avgTemp(value),
        desc: mostFrequentDescription(value, 'desc'),
        main: mostFrequentDescription(value, 'main'),
      };
    });

    return formattedData;
  }
  return [];
};

export {
  capitalizeEachWord,
  convertDate,
  getTodayForecast,
  getWeekForecast,
  rounding,
  weatherImg,
};
