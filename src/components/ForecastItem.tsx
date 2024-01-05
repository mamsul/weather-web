import { Thermometer } from 'lucide-react';

const ForecastItem = ({
  day,
  weather,
  temp,
}: {
  day: string;
  weather: string;
  temp: number;
}) => {
  return (
    <>
      <div className="flex h-full w-full flex-row items-center justify-between text-sm">
        <span className="text-gray-500">{day}</span>

        <div className="flex flex-col gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <div className="h-[2rem] w-auto sm:h-[3rem]">
              <img
                src="/src/assets/weather-icons/thunderstorm.png"
                alt="cloudy weather icon"
                sizes="100%"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <span className="text-sm font-semibold sm:text-base">
              {weather}
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 font-semibold sm:gap-2">
          <Thermometer className="h-3 w-auto sm:h-4" /> {temp}°C
        </span>
      </div>
    </>
  );
};

export default ForecastItem;
