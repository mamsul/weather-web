import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import LocationSearch from './components/LocationSearch';
import AirConditionSection from './components/section/AirConditionSection';
import ForecastSection from './components/section/ForecastSection';
import TodayForecastSection from './components/section/TodayForecastSection';
import TodayWeatherSection from './components/section/TodayWeatherSection';
import { fetchCurrentWeather } from './service/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    async function fetchWeatherData() {
      const data = await fetchCurrentWeather(44.34, 10.99);
      setWeather(data);
    }

    fetchWeatherData();
  }, []);

  console.log(weather);

  return (
    <main className="flex h-screen w-full items-center justify-center text-gray-700 forest-bg">
      <div className="mx-auto h-[95vh] w-full max-w-[95vw] xl:max-w-7xl xl:px-10 2xl:px-0">
        <div className="h-full w-full overflow-auto rounded-2xl bg-white/80 p-5 backdrop-blur-sm">
          <div className="flex w-full flex-col">
            <Header />
            <div className="mx-auto mt-5 w-full xl:w-7/12">
              <LocationSearch />
            </div>
            <div className="mt-6 flex w-full flex-col gap-5 xl:flex-row">
              <div className="flex h-full w-full flex-col space-y-3 xl:w-7/12">
                <TodayWeatherSection />
                <TodayForecastSection />
                <AirConditionSection />
              </div>
              <div className="h-full w-full xl:w-5/12">
                <ForecastSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
