const TodayForecastSection = () => {
  return (
    <div className="h-auto w-full rounded-2xl bg-white/55 p-3 lg:h-[11.6rem] lg:p-5">
      <h2 className="text-center text-sm font-bold lg:text-base">
        TODAY FORECAST
      </h2>
      <ul className="mt-5 flex flex-row justify-start gap-12 overflow-auto md:justify-center">
        <li className="flex h-full flex-col items-center justify-between space-y-2">
          <span className="text-xs text-gray-500 lg:text-sm">06.00 AM</span>
          <div className="h-[3rem] w-[3.5rem]">
            <img
              src="/src/assets/weather-icons/night_storm.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="text-xs font-medium lg:text-sm">27°C</span>
        </li>
        <li className="flex h-full flex-col items-center justify-between space-y-2">
          <span className="text-xs text-gray-500 lg:text-sm">09.00 AM</span>
          <div className="h-[3rem] w-[3.5rem]">
            <img
              src="/src/assets/weather-icons/night_storm.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="text-xs font-medium lg:text-sm">27°C</span>
        </li>
        <li className="flex h-full flex-col items-center justify-between space-y-2">
          <span className="text-xs text-gray-500 lg:text-sm">12.00 PM</span>
          <div className="h-[3rem] w-[3.5rem]">
            <img
              src="/src/assets/weather-icons/night_storm.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="text-xs font-medium lg:text-sm">27°C</span>
        </li>
        <li className="flex h-full flex-col items-center justify-between space-y-2">
          <span className="text-xs text-gray-500 lg:text-sm">03.00 PM</span>
          <div className="h-[3rem] w-[3.5rem]">
            <img
              src="/src/assets/weather-icons/night_storm.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="text-xs font-medium lg:text-sm">27°C</span>
        </li>
        <li className="flex h-full flex-col items-center justify-between space-y-2">
          <span className="text-xs text-gray-500 lg:text-sm">06.00 PM</span>
          <div className="h-[3rem] w-[3.5rem]">
            <img
              src="/src/assets/weather-icons/night_storm.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="text-xs font-medium lg:text-sm">27°C</span>
        </li>
        <li className="flex h-full flex-col items-center justify-between space-y-2">
          <span className="text-xs text-gray-500 lg:text-sm">09.00 PM</span>
          <div className="h-[3rem] w-[3.5rem]">
            <img
              src="/src/assets/weather-icons/night_storm.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="text-xs font-medium lg:text-sm">27°C</span>
        </li>
      </ul>
    </div>
  );
};

export default TodayForecastSection;
