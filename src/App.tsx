import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import LocationSearch from './components/LocationSearch';
import AirConditionSection from './components/section/AirConditionSection';
import ForecastSection from './components/section/ForecastSection';
import TodayForecastSection from './components/section/TodayForecastSection';
import TodayWeatherSection from './components/section/TodayWeatherSection';
import { getTodayForecast, getWeekForecast } from './helper/utils';
import { fetchCurrentWeather } from './service/weather';

function App() {
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [todayForecast, setTodayForecast] = useState<IForecastData[] | []>([]);
  const [weekForecast, setWeekForecast] = useState<IForecastGroup[] | []>([]);
  const [latlon, setLatlon] = useState<string | null>(null);
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    async function fetchWeatherData(lat: number, lon: number) {
      const weatherData: IWeatherData = await fetchCurrentWeather(
        lat,
        lon,
        'weather',
      );
      const forecastData: IForecastRes = await fetchCurrentWeather(
        lat,
        lon,
        'forecast',
      );

      setWeather(weatherData);

      if (forecastData) {
        const todayForecast = await getTodayForecast(forecastData.list);
        const weekForecast = await getWeekForecast(forecastData.list);
        setTodayForecast(todayForecast);
        setWeekForecast(weekForecast);
      }
    }

    if (latlon) {
      const pos = latlon.split(' ');
      const lat = parseFloat(pos[0]);
      const lon = parseFloat(pos[1]);
      fetchWeatherData(lat, lon);
    }
  }, [latlon]);

  const clearData = () => {
    setWeather(null);
    setTodayForecast([]);
    setWeekForecast([]);
  };

  const handleChangeSearch = (data: any) => {
    clearData();
    setLatlon(data.value);

    const city = data.label.split(',');
    setCity(city[0].replace(',', ''));
  };

  return (
    <main className="flex h-screen w-full items-center justify-center text-gray-800 forest-bg">
      <div className="mx-auto h-[95vh] w-full max-w-[95vw] xl:max-w-7xl xl:px-10 2xl:px-0">
        <div className="h-full w-full overflow-auto rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
          <div className="flex w-full flex-col">
            <Header />
            <div className="mx-auto mt-5 w-full xl:w-7/12">
              <LocationSearch onChangeSearch={handleChangeSearch} />
            </div>
            <div className="mt-6 flex w-full flex-col gap-5 xl:flex-row">
              {weather && (
                <>
                  <div className="flex h-full w-full flex-col space-y-3 xl:w-7/12">
                    <TodayWeatherSection city={city} data={weather} />
                    <TodayForecastSection data={todayForecast} />
                    <AirConditionSection data={weather} />
                  </div>
                  <div className="h-full w-full xl:w-5/12">
                    <ForecastSection data={weekForecast} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
