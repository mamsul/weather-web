const TodayWeatherSection = () => {
  return (
    <div className="w-full sm:px-10 lg:px-40 xl:px-10">
      <div className="flex h-[20rem] flex-col items-center justify-center py-3 sm:h-[15rem] sm:flex-row sm:justify-between">
        <div className="flex h-full flex-col justify-between">
          <div className="text-center sm:text-start">
            <p className="text-xl font-bold sm:text-4xl">Indramayu</p>
            <p className="mt-1 text-sm font-medium text-gray-500 sm:mt-2 sm:text-base">
              Today, 4 Jan 2023
            </p>
          </div>

          <div className="h-[8rem] w-auto sm:hidden">
            <img
              src="/src/assets/weather-icons/rainy.png"
              alt="cloudy weather icon"
              sizes="100%"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div className="text-center sm:text-start">
            <p className="text-2xl font-bold sm:text-6xl">30°C</p>
            <p className="text-sm font-medium text-gray-500 sm:text-base">
              heavy intensity rain
            </p>
          </div>
        </div>
        <div className="hidden h-[13rem] w-auto sm:block">
          <img
            src="/src/assets/weather-icons/rainy.png"
            alt="cloudy weather icon"
            sizes="100%"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherSection;
